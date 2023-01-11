package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdPublicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdPublicPathParams withId(String id) {
        this.id = id;
        return this;
    }
}