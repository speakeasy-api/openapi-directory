package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public GetPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}