package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConsumerV1CustomersIdSubscriptionsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel;
    public PostConsumerV1CustomersIdSubscriptionsRequests withCustomerSubscriptionInputModel(openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel) {
        this.customerSubscriptionInputModel = customerSubscriptionInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel1;
    public PostConsumerV1CustomersIdSubscriptionsRequests withCustomerSubscriptionInputModel1(openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel1) {
        this.customerSubscriptionInputModel1 = customerSubscriptionInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel2;
    public PostConsumerV1CustomersIdSubscriptionsRequests withCustomerSubscriptionInputModel2(openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel2) {
        this.customerSubscriptionInputModel2 = customerSubscriptionInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel3;
    public PostConsumerV1CustomersIdSubscriptionsRequests withCustomerSubscriptionInputModel3(openapisdk.models.shared.CustomerSubscriptionInputModel customerSubscriptionInputModel3) {
        this.customerSubscriptionInputModel3 = customerSubscriptionInputModel3;
        return this;
    }
}