package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsGrpcRoutesCreateRequest {
    public NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsGrpcRoutesCreateRequest withPathParams(NetworkservicesProjectsLocationsGrpcRoutesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsGrpcRoutesCreateRequest withQueryParams(NetworkservicesProjectsLocationsGrpcRoutesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GrpcRouteInput request;
    public NetworkservicesProjectsLocationsGrpcRoutesCreateRequest withRequest(openapisdk.models.shared.GrpcRouteInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity security;
    public NetworkservicesProjectsLocationsGrpcRoutesCreateRequest withSecurity(NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity security) {
        this.security = security;
        return this;
    }
}