package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesListRequest {
    public CloudiotProjectsLocationsRegistriesListPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesListRequest withPathParams(CloudiotProjectsLocationsRegistriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesListQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesListRequest withQueryParams(CloudiotProjectsLocationsRegistriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesListSecurity security;
    public CloudiotProjectsLocationsRegistriesListRequest withSecurity(CloudiotProjectsLocationsRegistriesListSecurity security) {
        this.security = security;
        return this;
    }
}