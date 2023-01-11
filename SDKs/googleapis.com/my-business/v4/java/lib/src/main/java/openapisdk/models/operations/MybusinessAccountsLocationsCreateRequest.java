package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsCreateRequest {
    public MybusinessAccountsLocationsCreatePathParams pathParams;
    public MybusinessAccountsLocationsCreateRequest withPathParams(MybusinessAccountsLocationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsCreateQueryParams queryParams;
    public MybusinessAccountsLocationsCreateRequest withQueryParams(MybusinessAccountsLocationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public MybusinessAccountsLocationsCreateRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
}