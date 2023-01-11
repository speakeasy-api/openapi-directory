package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsStartPaidServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerSubscriptionsStartPaidServicePathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public ResellerSubscriptionsStartPaidServicePathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}