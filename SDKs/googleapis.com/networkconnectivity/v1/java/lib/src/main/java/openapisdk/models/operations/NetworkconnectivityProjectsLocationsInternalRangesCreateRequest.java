package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsInternalRangesCreateRequest {
    public NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams pathParams;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateRequest withPathParams(NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateRequest withQueryParams(NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InternalRangeInput request;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateRequest withRequest(openapisdk.models.shared.InternalRangeInput request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity security;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateRequest withSecurity(NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity security) {
        this.security = security;
        return this;
    }
}