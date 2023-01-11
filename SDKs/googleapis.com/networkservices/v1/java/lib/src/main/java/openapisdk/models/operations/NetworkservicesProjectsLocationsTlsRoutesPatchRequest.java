package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTlsRoutesPatchRequest {
    public NetworkservicesProjectsLocationsTlsRoutesPatchPathParams pathParams;
    public NetworkservicesProjectsLocationsTlsRoutesPatchRequest withPathParams(NetworkservicesProjectsLocationsTlsRoutesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams queryParams;
    public NetworkservicesProjectsLocationsTlsRoutesPatchRequest withQueryParams(NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TlsRouteInput request;
    public NetworkservicesProjectsLocationsTlsRoutesPatchRequest withRequest(openapisdk.models.shared.TlsRouteInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsTlsRoutesPatchSecurity security;
    public NetworkservicesProjectsLocationsTlsRoutesPatchRequest withSecurity(NetworkservicesProjectsLocationsTlsRoutesPatchSecurity security) {
        this.security = security;
        return this;
    }
}