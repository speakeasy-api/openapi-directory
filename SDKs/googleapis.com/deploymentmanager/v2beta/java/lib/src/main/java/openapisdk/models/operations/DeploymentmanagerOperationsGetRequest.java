package openapisdk.models.operations;



public class DeploymentmanagerOperationsGetRequest {
    public DeploymentmanagerOperationsGetPathParams pathParams;
    public DeploymentmanagerOperationsGetRequest withPathParams(DeploymentmanagerOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerOperationsGetQueryParams queryParams;
    public DeploymentmanagerOperationsGetRequest withQueryParams(DeploymentmanagerOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerOperationsGetSecurity security;
    public DeploymentmanagerOperationsGetRequest withSecurity(DeploymentmanagerOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}