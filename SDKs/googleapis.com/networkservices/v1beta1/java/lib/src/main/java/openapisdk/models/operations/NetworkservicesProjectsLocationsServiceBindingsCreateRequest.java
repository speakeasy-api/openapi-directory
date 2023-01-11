package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsCreateRequest {
    public NetworkservicesProjectsLocationsServiceBindingsCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsServiceBindingsCreateRequest withPathParams(NetworkservicesProjectsLocationsServiceBindingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsServiceBindingsCreateRequest withQueryParams(NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceBindingInput request;
    public NetworkservicesProjectsLocationsServiceBindingsCreateRequest withRequest(openapisdk.models.shared.ServiceBindingInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsServiceBindingsCreateSecurity security;
    public NetworkservicesProjectsLocationsServiceBindingsCreateRequest withSecurity(NetworkservicesProjectsLocationsServiceBindingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}