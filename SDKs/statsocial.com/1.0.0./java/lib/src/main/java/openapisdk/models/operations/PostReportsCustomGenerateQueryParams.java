package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsCustomGenerateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_name")
    public String reportName;
    public PostReportsCustomGenerateQueryParams withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
}