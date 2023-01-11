package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReportDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportDefinitionId")
    public String reportDefinitionId;
    public PutReportDefinitionPathParams withReportDefinitionId(String reportDefinitionId) {
        this.reportDefinitionId = reportDefinitionId;
        return this;
    }
}