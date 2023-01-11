package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTlsRoutesCreateRequest {
    public NetworkservicesProjectsLocationsTlsRoutesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsTlsRoutesCreateRequest withPathParams(NetworkservicesProjectsLocationsTlsRoutesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsTlsRoutesCreateRequest withQueryParams(NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TlsRouteInput request;
    public NetworkservicesProjectsLocationsTlsRoutesCreateRequest withRequest(openapisdk.models.shared.TlsRouteInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsTlsRoutesCreateSecurity security;
    public NetworkservicesProjectsLocationsTlsRoutesCreateRequest withSecurity(NetworkservicesProjectsLocationsTlsRoutesCreateSecurity security) {
        this.security = security;
        return this;
    }
}