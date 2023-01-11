package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1CustomersIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CustomerUpdateModel customerUpdateModel;
    public PutConsumerV1CustomersIdRequests withCustomerUpdateModel(openapisdk.models.shared.CustomerUpdateModel customerUpdateModel) {
        this.customerUpdateModel = customerUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomerUpdateModel customerUpdateModel1;
    public PutConsumerV1CustomersIdRequests withCustomerUpdateModel1(openapisdk.models.shared.CustomerUpdateModel customerUpdateModel1) {
        this.customerUpdateModel1 = customerUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CustomerUpdateModel customerUpdateModel2;
    public PutConsumerV1CustomersIdRequests withCustomerUpdateModel2(openapisdk.models.shared.CustomerUpdateModel customerUpdateModel2) {
        this.customerUpdateModel2 = customerUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CustomerUpdateModel customerUpdateModel3;
    public PutConsumerV1CustomersIdRequests withCustomerUpdateModel3(openapisdk.models.shared.CustomerUpdateModel customerUpdateModel3) {
        this.customerUpdateModel3 = customerUpdateModel3;
        return this;
    }
}