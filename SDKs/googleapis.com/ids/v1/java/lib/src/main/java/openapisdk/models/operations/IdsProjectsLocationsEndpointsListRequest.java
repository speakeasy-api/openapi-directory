package openapisdk.models.operations;



public class IdsProjectsLocationsEndpointsListRequest {
    public IdsProjectsLocationsEndpointsListPathParams pathParams;
    public IdsProjectsLocationsEndpointsListRequest withPathParams(IdsProjectsLocationsEndpointsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdsProjectsLocationsEndpointsListQueryParams queryParams;
    public IdsProjectsLocationsEndpointsListRequest withQueryParams(IdsProjectsLocationsEndpointsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IdsProjectsLocationsEndpointsListSecurity security;
    public IdsProjectsLocationsEndpointsListRequest withSecurity(IdsProjectsLocationsEndpointsListSecurity security) {
        this.security = security;
        return this;
    }
}