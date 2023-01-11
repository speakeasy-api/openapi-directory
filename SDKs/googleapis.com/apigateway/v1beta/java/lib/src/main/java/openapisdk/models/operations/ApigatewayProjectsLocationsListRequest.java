package openapisdk.models.operations;



public class ApigatewayProjectsLocationsListRequest {
    public ApigatewayProjectsLocationsListPathParams pathParams;
    public ApigatewayProjectsLocationsListRequest withPathParams(ApigatewayProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsListQueryParams queryParams;
    public ApigatewayProjectsLocationsListRequest withQueryParams(ApigatewayProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigatewayProjectsLocationsListSecurity security;
    public ApigatewayProjectsLocationsListRequest withSecurity(ApigatewayProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}