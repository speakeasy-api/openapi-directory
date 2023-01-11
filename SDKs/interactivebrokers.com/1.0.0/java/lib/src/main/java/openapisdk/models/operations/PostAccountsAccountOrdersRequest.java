package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountOrdersRequest {
    public PostAccountsAccountOrdersPathParams pathParams;
    public PostAccountsAccountOrdersRequest withPathParams(PostAccountsAccountOrdersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAccountsAccountOrdersRequestBody request;
    public PostAccountsAccountOrdersRequest withRequest(PostAccountsAccountOrdersRequestBody request) {
        this.request = request;
        return this;
    }
}