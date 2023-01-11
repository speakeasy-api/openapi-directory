package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesDomainmappingsCreateRequest {
    public RunNamespacesDomainmappingsCreatePathParams pathParams;
    public RunNamespacesDomainmappingsCreateRequest withPathParams(RunNamespacesDomainmappingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesDomainmappingsCreateQueryParams queryParams;
    public RunNamespacesDomainmappingsCreateRequest withQueryParams(RunNamespacesDomainmappingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DomainMapping request;
    public RunNamespacesDomainmappingsCreateRequest withRequest(openapisdk.models.shared.DomainMapping request) {
        this.request = request;
        return this;
    }
    public RunNamespacesDomainmappingsCreateSecurity security;
    public RunNamespacesDomainmappingsCreateRequest withSecurity(RunNamespacesDomainmappingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}