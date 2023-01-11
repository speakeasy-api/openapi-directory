package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisConfigsListRequest {
    public ApigatewayProjectsLocationsApisConfigsListPathParams pathParams;
    public ApigatewayProjectsLocationsApisConfigsListRequest withPathParams(ApigatewayProjectsLocationsApisConfigsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisConfigsListQueryParams queryParams;
    public ApigatewayProjectsLocationsApisConfigsListRequest withQueryParams(ApigatewayProjectsLocationsApisConfigsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisConfigsListSecurity security;
    public ApigatewayProjectsLocationsApisConfigsListRequest withSecurity(ApigatewayProjectsLocationsApisConfigsListSecurity security) {
        this.security = security;
        return this;
    }
}