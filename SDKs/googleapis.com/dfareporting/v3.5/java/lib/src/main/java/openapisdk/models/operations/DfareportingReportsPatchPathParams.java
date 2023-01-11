package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingReportsPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DfareportingReportsPatchPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}