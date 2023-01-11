package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsDatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_hash")
    public String reportHash;
    public GetReportsDatesQueryParams withReportHash(String reportHash) {
        this.reportHash = reportHash;
        return this;
    }
}