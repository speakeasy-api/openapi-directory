package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchReportsGetFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportFragment")
    public Long reportFragment;
    public DoubleclicksearchReportsGetFilePathParams withReportFragment(Long reportFragment) {
        this.reportFragment = reportFragment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DoubleclicksearchReportsGetFilePathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}