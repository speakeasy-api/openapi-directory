package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsIapTunnelLocationsDestGroupsPatchRequest {
    public IapProjectsIapTunnelLocationsDestGroupsPatchPathParams pathParams;
    public IapProjectsIapTunnelLocationsDestGroupsPatchRequest withPathParams(IapProjectsIapTunnelLocationsDestGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsIapTunnelLocationsDestGroupsPatchQueryParams queryParams;
    public IapProjectsIapTunnelLocationsDestGroupsPatchRequest withQueryParams(IapProjectsIapTunnelLocationsDestGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TunnelDestGroup request;
    public IapProjectsIapTunnelLocationsDestGroupsPatchRequest withRequest(openapisdk.models.shared.TunnelDestGroup request) {
        this.request = request;
        return this;
    }
    public IapProjectsIapTunnelLocationsDestGroupsPatchSecurity security;
    public IapProjectsIapTunnelLocationsDestGroupsPatchRequest withSecurity(IapProjectsIapTunnelLocationsDestGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}