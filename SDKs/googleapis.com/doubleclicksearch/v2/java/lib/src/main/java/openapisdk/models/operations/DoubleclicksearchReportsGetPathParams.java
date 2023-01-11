package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchReportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DoubleclicksearchReportsGetPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}