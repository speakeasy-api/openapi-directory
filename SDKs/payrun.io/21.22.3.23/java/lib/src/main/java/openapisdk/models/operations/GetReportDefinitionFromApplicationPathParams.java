package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportDefinitionFromApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportDefinitionId")
    public String reportDefinitionId;
    public GetReportDefinitionFromApplicationPathParams withReportDefinitionId(String reportDefinitionId) {
        this.reportDefinitionId = reportDefinitionId;
        return this;
    }
}