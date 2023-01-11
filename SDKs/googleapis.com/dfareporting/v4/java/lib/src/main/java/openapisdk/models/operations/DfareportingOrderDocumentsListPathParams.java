package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingOrderDocumentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingOrderDocumentsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DfareportingOrderDocumentsListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}