package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsCreateRequest {
    public AppengineAppsDomainMappingsCreatePathParams pathParams;
    public AppengineAppsDomainMappingsCreateRequest withPathParams(AppengineAppsDomainMappingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsDomainMappingsCreateQueryParams queryParams;
    public AppengineAppsDomainMappingsCreateRequest withQueryParams(AppengineAppsDomainMappingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DomainMapping request;
    public AppengineAppsDomainMappingsCreateRequest withRequest(openapisdk.models.shared.DomainMapping request) {
        this.request = request;
        return this;
    }
    public AppengineAppsDomainMappingsCreateSecurity security;
    public AppengineAppsDomainMappingsCreateRequest withSecurity(AppengineAppsDomainMappingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}