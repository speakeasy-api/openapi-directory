package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportOutputPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReportDefinitionId")
    public String reportDefinitionId;
    public GetReportOutputPathParams withReportDefinitionId(String reportDefinitionId) {
        this.reportDefinitionId = reportDefinitionId;
        return this;
    }
}