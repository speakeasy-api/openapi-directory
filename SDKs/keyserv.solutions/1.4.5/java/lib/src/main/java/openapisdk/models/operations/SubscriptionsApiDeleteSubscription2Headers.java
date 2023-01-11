package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscription2Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public SubscriptionsApiDeleteSubscription2Headers withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}