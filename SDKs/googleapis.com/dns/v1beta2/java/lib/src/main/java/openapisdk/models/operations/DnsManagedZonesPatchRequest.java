package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesPatchRequest {
    public DnsManagedZonesPatchPathParams pathParams;
    public DnsManagedZonesPatchRequest withPathParams(DnsManagedZonesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsManagedZonesPatchQueryParams queryParams;
    public DnsManagedZonesPatchRequest withQueryParams(DnsManagedZonesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManagedZone request;
    public DnsManagedZonesPatchRequest withRequest(openapisdk.models.shared.ManagedZone request) {
        this.request = request;
        return this;
    }
    public DnsManagedZonesPatchSecurity security;
    public DnsManagedZonesPatchRequest withSecurity(DnsManagedZonesPatchSecurity security) {
        this.security = security;
        return this;
    }
}