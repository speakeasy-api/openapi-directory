package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ContactcenterinsightsProjectsLocationsConversationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}