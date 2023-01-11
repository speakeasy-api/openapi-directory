package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportDefinitionId")
    public String reportDefinitionId;
    public DeleteReportDefinitionPathParams withReportDefinitionId(String reportDefinitionId) {
        this.reportDefinitionId = reportDefinitionId;
        return this;
    }
}