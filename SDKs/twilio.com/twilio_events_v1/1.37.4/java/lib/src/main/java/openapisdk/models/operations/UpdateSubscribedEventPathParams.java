package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscriptionSid")
    public String subscriptionSid;
    public UpdateSubscribedEventPathParams withSubscriptionSid(String subscriptionSid) {
        this.subscriptionSid = subscriptionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Type")
    public String type;
    public UpdateSubscribedEventPathParams withType(String type) {
        this.type = type;
        return this;
    }
}