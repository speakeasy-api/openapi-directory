package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsChangeSeatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerSubscriptionsChangeSeatsPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public ResellerSubscriptionsChangeSeatsPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}