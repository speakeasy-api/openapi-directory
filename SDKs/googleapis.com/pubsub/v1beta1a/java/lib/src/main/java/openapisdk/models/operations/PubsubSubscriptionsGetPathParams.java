package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription")
    public String subscription;
    public PubsubSubscriptionsGetPathParams withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}