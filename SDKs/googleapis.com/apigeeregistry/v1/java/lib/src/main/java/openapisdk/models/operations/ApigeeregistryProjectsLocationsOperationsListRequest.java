package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsOperationsListRequest {
    public ApigeeregistryProjectsLocationsOperationsListPathParams pathParams;
    public ApigeeregistryProjectsLocationsOperationsListRequest withPathParams(ApigeeregistryProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsOperationsListQueryParams queryParams;
    public ApigeeregistryProjectsLocationsOperationsListRequest withQueryParams(ApigeeregistryProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsOperationsListSecurity security;
    public ApigeeregistryProjectsLocationsOperationsListRequest withSecurity(ApigeeregistryProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}