package openapisdk.models.operations;



public class CloudassetResourcesSearchAllRequest {
    public CloudassetResourcesSearchAllPathParams pathParams;
    public CloudassetResourcesSearchAllRequest withPathParams(CloudassetResourcesSearchAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetResourcesSearchAllQueryParams queryParams;
    public CloudassetResourcesSearchAllRequest withQueryParams(CloudassetResourcesSearchAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudassetResourcesSearchAllSecurity security;
    public CloudassetResourcesSearchAllRequest withSecurity(CloudassetResourcesSearchAllSecurity security) {
        this.security = security;
        return this;
    }
}