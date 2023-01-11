package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdAnalyticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdAnalyticsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}