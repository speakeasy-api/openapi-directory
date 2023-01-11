package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingInventoryItemsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingInventoryItemsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DfareportingInventoryItemsListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}