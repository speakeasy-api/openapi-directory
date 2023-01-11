package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsChangePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerSubscriptionsChangePlanPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public String subscriptionId;
    public ResellerSubscriptionsChangePlanPathParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}