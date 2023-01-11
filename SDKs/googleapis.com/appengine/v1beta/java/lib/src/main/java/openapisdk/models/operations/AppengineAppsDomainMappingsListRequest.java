package openapisdk.models.operations;



public class AppengineAppsDomainMappingsListRequest {
    public AppengineAppsDomainMappingsListPathParams pathParams;
    public AppengineAppsDomainMappingsListRequest withPathParams(AppengineAppsDomainMappingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsDomainMappingsListQueryParams queryParams;
    public AppengineAppsDomainMappingsListRequest withQueryParams(AppengineAppsDomainMappingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsDomainMappingsListSecurity security;
    public AppengineAppsDomainMappingsListRequest withSecurity(AppengineAppsDomainMappingsListSecurity security) {
        this.security = security;
        return this;
    }
}