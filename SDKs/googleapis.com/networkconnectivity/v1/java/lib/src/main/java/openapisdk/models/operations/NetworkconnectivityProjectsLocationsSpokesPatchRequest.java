package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesPatchRequest {
    public NetworkconnectivityProjectsLocationsSpokesPatchPathParams pathParams;
    public NetworkconnectivityProjectsLocationsSpokesPatchRequest withPathParams(NetworkconnectivityProjectsLocationsSpokesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesPatchQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsSpokesPatchRequest withQueryParams(NetworkconnectivityProjectsLocationsSpokesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpokeInput request;
    public NetworkconnectivityProjectsLocationsSpokesPatchRequest withRequest(openapisdk.models.shared.SpokeInput request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsSpokesPatchSecurity security;
    public NetworkconnectivityProjectsLocationsSpokesPatchRequest withSecurity(NetworkconnectivityProjectsLocationsSpokesPatchSecurity security) {
        this.security = security;
        return this;
    }
}