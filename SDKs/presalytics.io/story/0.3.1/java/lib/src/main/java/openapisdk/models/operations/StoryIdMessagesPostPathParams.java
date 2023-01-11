package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdMessagesPostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdMessagesPostPathParams withId(String id) {
        this.id = id;
        return this;
    }
}