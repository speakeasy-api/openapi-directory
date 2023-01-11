package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventSubscriptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionId")
    public String subscriptionId;
    public GetEventSubscriptionsPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}