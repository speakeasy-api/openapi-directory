package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisListRequest {
    public ApigeeregistryProjectsLocationsApisListPathParams pathParams;
    public ApigeeregistryProjectsLocationsApisListRequest withPathParams(ApigeeregistryProjectsLocationsApisListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisListQueryParams queryParams;
    public ApigeeregistryProjectsLocationsApisListRequest withQueryParams(ApigeeregistryProjectsLocationsApisListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsApisListSecurity security;
    public ApigeeregistryProjectsLocationsApisListRequest withSecurity(ApigeeregistryProjectsLocationsApisListSecurity security) {
        this.security = security;
        return this;
    }
}