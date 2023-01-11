package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_type")
    public String reportType;
    public ReportsIndexPathParams withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public ReportsIndexPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}