package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountOrderImpactRequest {
    public PostAccountsAccountOrderImpactPathParams pathParams;
    public PostAccountsAccountOrderImpactRequest withPathParams(PostAccountsAccountOrderImpactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAccountsAccountOrderImpactRequestBody request;
    public PostAccountsAccountOrderImpactRequest withRequest(PostAccountsAccountOrderImpactRequestBody request) {
        this.request = request;
        return this;
    }
}