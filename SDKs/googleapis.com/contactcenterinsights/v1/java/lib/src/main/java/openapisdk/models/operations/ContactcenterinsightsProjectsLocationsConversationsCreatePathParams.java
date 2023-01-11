package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ContactcenterinsightsProjectsLocationsConversationsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}