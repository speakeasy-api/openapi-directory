package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingOrdersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingOrdersListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DfareportingOrdersListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}