package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsIapTunnelLocationsDestGroupsCreateRequest {
    public IapProjectsIapTunnelLocationsDestGroupsCreatePathParams pathParams;
    public IapProjectsIapTunnelLocationsDestGroupsCreateRequest withPathParams(IapProjectsIapTunnelLocationsDestGroupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams queryParams;
    public IapProjectsIapTunnelLocationsDestGroupsCreateRequest withQueryParams(IapProjectsIapTunnelLocationsDestGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TunnelDestGroup request;
    public IapProjectsIapTunnelLocationsDestGroupsCreateRequest withRequest(openapisdk.models.shared.TunnelDestGroup request) {
        this.request = request;
        return this;
    }
    public IapProjectsIapTunnelLocationsDestGroupsCreateSecurity security;
    public IapProjectsIapTunnelLocationsDestGroupsCreateRequest withSecurity(IapProjectsIapTunnelLocationsDestGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}