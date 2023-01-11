package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=report_id")
    public String reportId;
    public CancelReportPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}