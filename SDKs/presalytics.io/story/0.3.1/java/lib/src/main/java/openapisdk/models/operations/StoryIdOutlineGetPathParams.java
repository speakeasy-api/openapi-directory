package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdOutlineGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdOutlineGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}