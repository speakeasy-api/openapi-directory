package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdStatusGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdStatusGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}