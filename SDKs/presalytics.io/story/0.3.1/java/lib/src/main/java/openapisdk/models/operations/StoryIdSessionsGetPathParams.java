package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdSessionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdSessionsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}