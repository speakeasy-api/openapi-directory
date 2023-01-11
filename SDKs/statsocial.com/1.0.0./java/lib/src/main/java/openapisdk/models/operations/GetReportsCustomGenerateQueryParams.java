package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsCustomGenerateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_name")
    public String reportName;
    public GetReportsCustomGenerateQueryParams withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
}