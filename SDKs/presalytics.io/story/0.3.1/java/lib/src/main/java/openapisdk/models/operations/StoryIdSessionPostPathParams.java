package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdSessionPostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdSessionPostPathParams withId(String id) {
        this.id = id;
        return this;
    }
}