package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public UpdatePathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}