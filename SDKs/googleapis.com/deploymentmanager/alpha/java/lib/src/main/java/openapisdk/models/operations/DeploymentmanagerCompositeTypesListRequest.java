package openapisdk.models.operations;



public class DeploymentmanagerCompositeTypesListRequest {
    public DeploymentmanagerCompositeTypesListPathParams pathParams;
    public DeploymentmanagerCompositeTypesListRequest withPathParams(DeploymentmanagerCompositeTypesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerCompositeTypesListQueryParams queryParams;
    public DeploymentmanagerCompositeTypesListRequest withQueryParams(DeploymentmanagerCompositeTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerCompositeTypesListSecurity security;
    public DeploymentmanagerCompositeTypesListRequest withSecurity(DeploymentmanagerCompositeTypesListSecurity security) {
        this.security = security;
        return this;
    }
}