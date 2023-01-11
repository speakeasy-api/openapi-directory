package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingReportsFilesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DfareportingReportsFilesListPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}