package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsConversationsAnalysesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}