package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountsAccountOrdersCustomerOrderIdRequest {
    public PutAccountsAccountOrdersCustomerOrderIdPathParams pathParams;
    public PutAccountsAccountOrdersCustomerOrderIdRequest withPathParams(PutAccountsAccountOrdersCustomerOrderIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody request;
    public PutAccountsAccountOrdersCustomerOrderIdRequest withRequest(PutAccountsAccountOrdersCustomerOrderIdRequestBody request) {
        this.request = request;
        return this;
    }
}