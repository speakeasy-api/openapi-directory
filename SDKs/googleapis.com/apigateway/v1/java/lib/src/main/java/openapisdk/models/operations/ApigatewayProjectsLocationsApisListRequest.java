package openapisdk.models.operations;



public class ApigatewayProjectsLocationsApisListRequest {
    public ApigatewayProjectsLocationsApisListPathParams pathParams;
    public ApigatewayProjectsLocationsApisListRequest withPathParams(ApigatewayProjectsLocationsApisListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisListQueryParams queryParams;
    public ApigatewayProjectsLocationsApisListRequest withQueryParams(ApigatewayProjectsLocationsApisListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApigatewayProjectsLocationsApisListSecurity security;
    public ApigatewayProjectsLocationsApisListRequest withSecurity(ApigatewayProjectsLocationsApisListSecurity security) {
        this.security = security;
        return this;
    }
}