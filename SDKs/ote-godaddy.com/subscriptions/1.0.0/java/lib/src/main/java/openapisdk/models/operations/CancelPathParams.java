package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public CancelPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}