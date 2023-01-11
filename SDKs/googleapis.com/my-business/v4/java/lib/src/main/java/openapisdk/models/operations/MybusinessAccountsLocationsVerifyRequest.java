package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsVerifyRequest {
    public MybusinessAccountsLocationsVerifyPathParams pathParams;
    public MybusinessAccountsLocationsVerifyRequest withPathParams(MybusinessAccountsLocationsVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsVerifyQueryParams queryParams;
    public MybusinessAccountsLocationsVerifyRequest withQueryParams(MybusinessAccountsLocationsVerifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyLocationRequest request;
    public MybusinessAccountsLocationsVerifyRequest withRequest(openapisdk.models.shared.VerifyLocationRequest request) {
        this.request = request;
        return this;
    }
}