package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsMetadataColumnsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportType")
    public String reportType;
    public AnalyticsMetadataColumnsListPathParams withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
}