package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1CustomersSubscriptionsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel;
    public PutConsumerV1CustomersSubscriptionsIdRequests withCustomerSubscriptionUpdateModel(openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel) {
        this.customerSubscriptionUpdateModel = customerSubscriptionUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel1;
    public PutConsumerV1CustomersSubscriptionsIdRequests withCustomerSubscriptionUpdateModel1(openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel1) {
        this.customerSubscriptionUpdateModel1 = customerSubscriptionUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel2;
    public PutConsumerV1CustomersSubscriptionsIdRequests withCustomerSubscriptionUpdateModel2(openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel2) {
        this.customerSubscriptionUpdateModel2 = customerSubscriptionUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel3;
    public PutConsumerV1CustomersSubscriptionsIdRequests withCustomerSubscriptionUpdateModel3(openapisdk.models.shared.CustomerSubscriptionUpdateModel customerSubscriptionUpdateModel3) {
        this.customerSubscriptionUpdateModel3 = customerSubscriptionUpdateModel3;
        return this;
    }
}