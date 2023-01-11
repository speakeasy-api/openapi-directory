package openapisdk.models.operations;



public class DeploymentmanagerOperationsListRequest {
    public DeploymentmanagerOperationsListPathParams pathParams;
    public DeploymentmanagerOperationsListRequest withPathParams(DeploymentmanagerOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerOperationsListQueryParams queryParams;
    public DeploymentmanagerOperationsListRequest withQueryParams(DeploymentmanagerOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerOperationsListSecurity security;
    public DeploymentmanagerOperationsListRequest withSecurity(DeploymentmanagerOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}