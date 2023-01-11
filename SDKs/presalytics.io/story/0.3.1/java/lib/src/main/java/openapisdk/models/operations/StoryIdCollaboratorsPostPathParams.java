package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsPostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdCollaboratorsPostPathParams withId(String id) {
        this.id = id;
        return this;
    }
}