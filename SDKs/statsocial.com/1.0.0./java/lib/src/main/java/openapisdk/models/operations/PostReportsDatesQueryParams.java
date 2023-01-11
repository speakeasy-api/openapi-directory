package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsDatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_hash")
    public String reportHash;
    public PostReportsDatesQueryParams withReportHash(String reportHash) {
        this.reportHash = reportHash;
        return this;
    }
}