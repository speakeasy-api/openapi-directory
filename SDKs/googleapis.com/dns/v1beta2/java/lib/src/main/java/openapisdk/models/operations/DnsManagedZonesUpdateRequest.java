package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesUpdateRequest {
    public DnsManagedZonesUpdatePathParams pathParams;
    public DnsManagedZonesUpdateRequest withPathParams(DnsManagedZonesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesUpdateQueryParams queryParams;
    public DnsManagedZonesUpdateRequest withQueryParams(DnsManagedZonesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManagedZone request;
    public DnsManagedZonesUpdateRequest withRequest(openapisdk.models.shared.ManagedZone request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesUpdateSecurity security;
    public DnsManagedZonesUpdateRequest withSecurity(DnsManagedZonesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}