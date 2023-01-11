package openapisdk.models.operations;



public class RunNamespacesConfigurationsListRequest {
    public RunNamespacesConfigurationsListPathParams pathParams;
    public RunNamespacesConfigurationsListRequest withPathParams(RunNamespacesConfigurationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesConfigurationsListQueryParams queryParams;
    public RunNamespacesConfigurationsListRequest withQueryParams(RunNamespacesConfigurationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesConfigurationsListSecurity security;
    public RunNamespacesConfigurationsListRequest withSecurity(RunNamespacesConfigurationsListSecurity security) {
        this.security = security;
        return this;
    }
}