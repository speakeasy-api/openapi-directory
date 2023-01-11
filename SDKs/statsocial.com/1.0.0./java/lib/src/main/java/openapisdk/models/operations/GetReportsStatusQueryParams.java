package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_hash")
    public String reportHash;
    public GetReportsStatusQueryParams withReportHash(String reportHash) {
        this.reportHash = reportHash;
        return this;
    }
}