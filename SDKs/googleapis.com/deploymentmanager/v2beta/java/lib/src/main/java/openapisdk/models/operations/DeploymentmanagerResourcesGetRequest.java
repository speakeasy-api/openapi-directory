package openapisdk.models.operations;



public class DeploymentmanagerResourcesGetRequest {
    public DeploymentmanagerResourcesGetPathParams pathParams;
    public DeploymentmanagerResourcesGetRequest withPathParams(DeploymentmanagerResourcesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerResourcesGetQueryParams queryParams;
    public DeploymentmanagerResourcesGetRequest withQueryParams(DeploymentmanagerResourcesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerResourcesGetSecurity security;
    public DeploymentmanagerResourcesGetRequest withSecurity(DeploymentmanagerResourcesGetSecurity security) {
        this.security = security;
        return this;
    }
}