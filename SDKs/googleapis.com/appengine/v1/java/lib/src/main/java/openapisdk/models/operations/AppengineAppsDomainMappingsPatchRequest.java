package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsPatchRequest {
    public AppengineAppsDomainMappingsPatchPathParams pathParams;
    public AppengineAppsDomainMappingsPatchRequest withPathParams(AppengineAppsDomainMappingsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsDomainMappingsPatchQueryParams queryParams;
    public AppengineAppsDomainMappingsPatchRequest withQueryParams(AppengineAppsDomainMappingsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DomainMapping request;
    public AppengineAppsDomainMappingsPatchRequest withRequest(openapisdk.models.shared.DomainMapping request) {
        this.request = request;
        return this;
    }
    public AppengineAppsDomainMappingsPatchSecurity security;
    public AppengineAppsDomainMappingsPatchRequest withSecurity(AppengineAppsDomainMappingsPatchSecurity security) {
        this.security = security;
        return this;
    }
}