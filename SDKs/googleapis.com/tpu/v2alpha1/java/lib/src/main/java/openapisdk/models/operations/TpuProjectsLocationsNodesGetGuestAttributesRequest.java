package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesGetGuestAttributesRequest {
    public TpuProjectsLocationsNodesGetGuestAttributesPathParams pathParams;
    public TpuProjectsLocationsNodesGetGuestAttributesRequest withPathParams(TpuProjectsLocationsNodesGetGuestAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesGetGuestAttributesQueryParams queryParams;
    public TpuProjectsLocationsNodesGetGuestAttributesRequest withQueryParams(TpuProjectsLocationsNodesGetGuestAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetGuestAttributesRequest request;
    public TpuProjectsLocationsNodesGetGuestAttributesRequest withRequest(openapisdk.models.shared.GetGuestAttributesRequest request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesGetGuestAttributesSecurity security;
    public TpuProjectsLocationsNodesGetGuestAttributesRequest withSecurity(TpuProjectsLocationsNodesGetGuestAttributesSecurity security) {
        this.security = security;
        return this;
    }
}