package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTcpRoutesCreateRequest {
    public NetworkservicesProjectsLocationsTcpRoutesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsTcpRoutesCreateRequest withPathParams(NetworkservicesProjectsLocationsTcpRoutesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsTcpRoutesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsTcpRoutesCreateRequest withQueryParams(NetworkservicesProjectsLocationsTcpRoutesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TcpRouteInput request;
    public NetworkservicesProjectsLocationsTcpRoutesCreateRequest withRequest(openapisdk.models.shared.TcpRouteInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsTcpRoutesCreateSecurity security;
    public NetworkservicesProjectsLocationsTcpRoutesCreateRequest withSecurity(NetworkservicesProjectsLocationsTcpRoutesCreateSecurity security) {
        this.security = security;
        return this;
    }
}