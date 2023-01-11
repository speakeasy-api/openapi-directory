package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscription")
    public String subscription;
    public PubsubSubscriptionsDeletePathParams withSubscription(String subscription) {
        this.subscription = subscription;
        return this;
    }
}