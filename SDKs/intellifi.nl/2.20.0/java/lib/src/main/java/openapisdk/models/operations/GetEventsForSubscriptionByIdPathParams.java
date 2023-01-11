package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsForSubscriptionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEventsForSubscriptionByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}