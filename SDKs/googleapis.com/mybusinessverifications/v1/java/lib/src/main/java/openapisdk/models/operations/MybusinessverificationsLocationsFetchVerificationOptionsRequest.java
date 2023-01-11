package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsFetchVerificationOptionsRequest {
    public MybusinessverificationsLocationsFetchVerificationOptionsPathParams pathParams;
    public MybusinessverificationsLocationsFetchVerificationOptionsRequest withPathParams(MybusinessverificationsLocationsFetchVerificationOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessverificationsLocationsFetchVerificationOptionsQueryParams queryParams;
    public MybusinessverificationsLocationsFetchVerificationOptionsRequest withQueryParams(MybusinessverificationsLocationsFetchVerificationOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FetchVerificationOptionsRequest request;
    public MybusinessverificationsLocationsFetchVerificationOptionsRequest withRequest(openapisdk.models.shared.FetchVerificationOptionsRequest request) {
        this.request = request;
        return this;
    }
}