package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}