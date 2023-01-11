package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsMediaCreateRequest {
    public MybusinessAccountsLocationsMediaCreatePathParams pathParams;
    public MybusinessAccountsLocationsMediaCreateRequest withPathParams(MybusinessAccountsLocationsMediaCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsMediaCreateQueryParams queryParams;
    public MybusinessAccountsLocationsMediaCreateRequest withQueryParams(MybusinessAccountsLocationsMediaCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MediaItem request;
    public MybusinessAccountsLocationsMediaCreateRequest withRequest(openapisdk.models.shared.MediaItem request) {
        this.request = request;
        return this;
    }
}