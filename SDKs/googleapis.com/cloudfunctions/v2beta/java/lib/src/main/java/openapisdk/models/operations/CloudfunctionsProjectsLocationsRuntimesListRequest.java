package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsRuntimesListRequest {
    public CloudfunctionsProjectsLocationsRuntimesListPathParams pathParams;
    public CloudfunctionsProjectsLocationsRuntimesListRequest withPathParams(CloudfunctionsProjectsLocationsRuntimesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsRuntimesListQueryParams queryParams;
    public CloudfunctionsProjectsLocationsRuntimesListRequest withQueryParams(CloudfunctionsProjectsLocationsRuntimesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsRuntimesListSecurity security;
    public CloudfunctionsProjectsLocationsRuntimesListRequest withSecurity(CloudfunctionsProjectsLocationsRuntimesListSecurity security) {
        this.security = security;
        return this;
    }
}