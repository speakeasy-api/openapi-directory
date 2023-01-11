package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConsumerV1CustomersRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CustomerInputModel customerInputModel;
    public PostConsumerV1CustomersRequests withCustomerInputModel(openapisdk.models.shared.CustomerInputModel customerInputModel) {
        this.customerInputModel = customerInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerInputModel customerInputModel1;
    public PostConsumerV1CustomersRequests withCustomerInputModel1(openapisdk.models.shared.CustomerInputModel customerInputModel1) {
        this.customerInputModel1 = customerInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CustomerInputModel customerInputModel2;
    public PostConsumerV1CustomersRequests withCustomerInputModel2(openapisdk.models.shared.CustomerInputModel customerInputModel2) {
        this.customerInputModel2 = customerInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CustomerInputModel customerInputModel3;
    public PostConsumerV1CustomersRequests withCustomerInputModel3(openapisdk.models.shared.CustomerInputModel customerInputModel3) {
        this.customerInputModel3 = customerInputModel3;
        return this;
    }
}