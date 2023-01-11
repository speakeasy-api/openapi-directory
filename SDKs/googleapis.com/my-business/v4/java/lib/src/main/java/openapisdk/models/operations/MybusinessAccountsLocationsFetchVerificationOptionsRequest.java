package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsFetchVerificationOptionsRequest {
    public MybusinessAccountsLocationsFetchVerificationOptionsPathParams pathParams;
    public MybusinessAccountsLocationsFetchVerificationOptionsRequest withPathParams(MybusinessAccountsLocationsFetchVerificationOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsFetchVerificationOptionsQueryParams queryParams;
    public MybusinessAccountsLocationsFetchVerificationOptionsRequest withQueryParams(MybusinessAccountsLocationsFetchVerificationOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FetchVerificationOptionsRequest request;
    public MybusinessAccountsLocationsFetchVerificationOptionsRequest withRequest(openapisdk.models.shared.FetchVerificationOptionsRequest request) {
        this.request = request;
        return this;
    }
}