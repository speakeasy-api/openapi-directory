package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionSid")
    public String subscriptionSid;
    public FetchSubscribedEventPathParams withSubscriptionSid(String subscriptionSid) {
        this.subscriptionSid = subscriptionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Type")
    public String type;
    public FetchSubscribedEventPathParams withType(String type) {
        this.type = type;
        return this;
    }
}