package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionSid")
    public String subscriptionSid;
    public ListSubscribedEventPathParams withSubscriptionSid(String subscriptionSid) {
        this.subscriptionSid = subscriptionSid;
        return this;
    }
}