package openapisdk.models.operations;



public class DeploymentmanagerTypesListRequest {
    public DeploymentmanagerTypesListPathParams pathParams;
    public DeploymentmanagerTypesListRequest withPathParams(DeploymentmanagerTypesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerTypesListQueryParams queryParams;
    public DeploymentmanagerTypesListRequest withQueryParams(DeploymentmanagerTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerTypesListSecurity security;
    public DeploymentmanagerTypesListRequest withSecurity(DeploymentmanagerTypesListSecurity security) {
        this.security = security;
        return this;
    }
}