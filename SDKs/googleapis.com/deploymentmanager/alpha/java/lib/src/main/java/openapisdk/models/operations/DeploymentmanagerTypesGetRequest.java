package openapisdk.models.operations;



public class DeploymentmanagerTypesGetRequest {
    public DeploymentmanagerTypesGetPathParams pathParams;
    public DeploymentmanagerTypesGetRequest withPathParams(DeploymentmanagerTypesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeploymentmanagerTypesGetQueryParams queryParams;
    public DeploymentmanagerTypesGetRequest withQueryParams(DeploymentmanagerTypesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeploymentmanagerTypesGetSecurity security;
    public DeploymentmanagerTypesGetRequest withSecurity(DeploymentmanagerTypesGetSecurity security) {
        this.security = security;
        return this;
    }
}