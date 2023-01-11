package openapisdk.models.operations;



public class DeploymentmanagerManifestsListRequest {
    public DeploymentmanagerManifestsListPathParams pathParams;
    public DeploymentmanagerManifestsListRequest withPathParams(DeploymentmanagerManifestsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerManifestsListQueryParams queryParams;
    public DeploymentmanagerManifestsListRequest withQueryParams(DeploymentmanagerManifestsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerManifestsListSecurity security;
    public DeploymentmanagerManifestsListRequest withSecurity(DeploymentmanagerManifestsListSecurity security) {
        this.security = security;
        return this;
    }
}