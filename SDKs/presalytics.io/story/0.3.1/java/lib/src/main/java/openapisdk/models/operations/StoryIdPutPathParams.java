package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdPutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdPutPathParams withId(String id) {
        this.id = id;
        return this;
    }
}