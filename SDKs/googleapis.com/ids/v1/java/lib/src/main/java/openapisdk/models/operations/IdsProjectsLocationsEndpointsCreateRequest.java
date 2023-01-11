package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsCreateRequest {
    public IdsProjectsLocationsEndpointsCreatePathParams pathParams;
    public IdsProjectsLocationsEndpointsCreateRequest withPathParams(IdsProjectsLocationsEndpointsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdsProjectsLocationsEndpointsCreateQueryParams queryParams;
    public IdsProjectsLocationsEndpointsCreateRequest withQueryParams(IdsProjectsLocationsEndpointsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndpointInput request;
    public IdsProjectsLocationsEndpointsCreateRequest withRequest(openapisdk.models.shared.EndpointInput request) {
        this.request = request;
        return this;
    }
    public IdsProjectsLocationsEndpointsCreateSecurity security;
    public IdsProjectsLocationsEndpointsCreateRequest withSecurity(IdsProjectsLocationsEndpointsCreateSecurity security) {
        this.security = security;
        return this;
    }
}