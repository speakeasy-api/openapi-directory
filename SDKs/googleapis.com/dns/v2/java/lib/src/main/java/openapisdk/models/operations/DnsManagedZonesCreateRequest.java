package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesCreateRequest {
    public DnsManagedZonesCreatePathParams pathParams;
    public DnsManagedZonesCreateRequest withPathParams(DnsManagedZonesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesCreateQueryParams queryParams;
    public DnsManagedZonesCreateRequest withQueryParams(DnsManagedZonesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManagedZone request;
    public DnsManagedZonesCreateRequest withRequest(openapisdk.models.shared.ManagedZone request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesCreateSecurity security;
    public DnsManagedZonesCreateRequest withSecurity(DnsManagedZonesCreateSecurity security) {
        this.security = security;
        return this;
    }
}