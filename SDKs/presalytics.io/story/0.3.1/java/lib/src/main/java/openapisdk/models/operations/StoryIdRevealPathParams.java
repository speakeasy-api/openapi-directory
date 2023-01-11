package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdRevealPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdRevealPathParams withId(String id) {
        this.id = id;
        return this;
    }
}