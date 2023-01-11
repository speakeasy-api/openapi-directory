package openapisdk.models.operations;



public class DeploymentmanagerDeploymentsListRequest {
    public DeploymentmanagerDeploymentsListPathParams pathParams;
    public DeploymentmanagerDeploymentsListRequest withPathParams(DeploymentmanagerDeploymentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerDeploymentsListQueryParams queryParams;
    public DeploymentmanagerDeploymentsListRequest withQueryParams(DeploymentmanagerDeploymentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerDeploymentsListSecurity security;
    public DeploymentmanagerDeploymentsListRequest withSecurity(DeploymentmanagerDeploymentsListSecurity security) {
        this.security = security;
        return this;
    }
}