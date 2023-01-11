package openapisdk.models.operations;



public class ApigatewayProjectsLocationsOperationsListRequest {
    public ApigatewayProjectsLocationsOperationsListPathParams pathParams;
    public ApigatewayProjectsLocationsOperationsListRequest withPathParams(ApigatewayProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsOperationsListQueryParams queryParams;
    public ApigatewayProjectsLocationsOperationsListRequest withQueryParams(ApigatewayProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigatewayProjectsLocationsOperationsListSecurity security;
    public ApigatewayProjectsLocationsOperationsListRequest withSecurity(ApigatewayProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}