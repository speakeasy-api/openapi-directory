package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsListRequest {
    public ApigeeregistryProjectsLocationsListPathParams pathParams;
    public ApigeeregistryProjectsLocationsListRequest withPathParams(ApigeeregistryProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsListQueryParams queryParams;
    public ApigeeregistryProjectsLocationsListRequest withQueryParams(ApigeeregistryProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsListSecurity security;
    public ApigeeregistryProjectsLocationsListRequest withSecurity(ApigeeregistryProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}