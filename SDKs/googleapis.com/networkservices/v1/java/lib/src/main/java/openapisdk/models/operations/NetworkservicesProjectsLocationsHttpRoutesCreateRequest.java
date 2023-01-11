package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsHttpRoutesCreateRequest {
    public NetworkservicesProjectsLocationsHttpRoutesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsHttpRoutesCreateRequest withPathParams(NetworkservicesProjectsLocationsHttpRoutesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsHttpRoutesCreateRequest withQueryParams(NetworkservicesProjectsLocationsHttpRoutesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HttpRouteInput request;
    public NetworkservicesProjectsLocationsHttpRoutesCreateRequest withRequest(openapisdk.models.shared.HttpRouteInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsHttpRoutesCreateSecurity security;
    public NetworkservicesProjectsLocationsHttpRoutesCreateRequest withSecurity(NetworkservicesProjectsLocationsHttpRoutesCreateSecurity security) {
        this.security = security;
        return this;
    }
}