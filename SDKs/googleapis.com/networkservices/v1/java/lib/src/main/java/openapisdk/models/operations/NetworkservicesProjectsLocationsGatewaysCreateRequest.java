package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsGatewaysCreateRequest {
    public NetworkservicesProjectsLocationsGatewaysCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsGatewaysCreateRequest withPathParams(NetworkservicesProjectsLocationsGatewaysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsGatewaysCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsGatewaysCreateRequest withQueryParams(NetworkservicesProjectsLocationsGatewaysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GatewayInput request;
    public NetworkservicesProjectsLocationsGatewaysCreateRequest withRequest(openapisdk.models.shared.GatewayInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsGatewaysCreateSecurity security;
    public NetworkservicesProjectsLocationsGatewaysCreateRequest withSecurity(NetworkservicesProjectsLocationsGatewaysCreateSecurity security) {
        this.security = security;
        return this;
    }
}