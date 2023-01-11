package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionSid")
    public String subscriptionSid;
    public CreateSubscribedEventPathParams withSubscriptionSid(String subscriptionSid) {
        this.subscriptionSid = subscriptionSid;
        return this;
    }
}