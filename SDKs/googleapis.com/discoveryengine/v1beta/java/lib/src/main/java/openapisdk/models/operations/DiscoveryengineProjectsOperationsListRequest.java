package openapisdk.models.operations;



public class DiscoveryengineProjectsOperationsListRequest {
    public DiscoveryengineProjectsOperationsListPathParams pathParams;
    public DiscoveryengineProjectsOperationsListRequest withPathParams(DiscoveryengineProjectsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsOperationsListQueryParams queryParams;
    public DiscoveryengineProjectsOperationsListRequest withQueryParams(DiscoveryengineProjectsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DiscoveryengineProjectsOperationsListSecurity security;
    public DiscoveryengineProjectsOperationsListRequest withSecurity(DiscoveryengineProjectsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}