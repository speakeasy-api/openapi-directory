package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingInventoryItemsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingInventoryItemsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingInventoryItemsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DfareportingInventoryItemsGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}