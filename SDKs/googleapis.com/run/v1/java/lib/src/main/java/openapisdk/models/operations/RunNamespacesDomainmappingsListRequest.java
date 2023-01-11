package openapisdk.models.operations;



public class RunNamespacesDomainmappingsListRequest {
    public RunNamespacesDomainmappingsListPathParams pathParams;
    public RunNamespacesDomainmappingsListRequest withPathParams(RunNamespacesDomainmappingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesDomainmappingsListQueryParams queryParams;
    public RunNamespacesDomainmappingsListRequest withQueryParams(RunNamespacesDomainmappingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesDomainmappingsListSecurity security;
    public RunNamespacesDomainmappingsListRequest withSecurity(RunNamespacesDomainmappingsListSecurity security) {
        this.security = security;
        return this;
    }
}