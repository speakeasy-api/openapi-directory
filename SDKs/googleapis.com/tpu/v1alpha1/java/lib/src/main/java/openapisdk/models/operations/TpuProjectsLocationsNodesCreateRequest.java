package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesCreateRequest {
    public TpuProjectsLocationsNodesCreatePathParams pathParams;
    public TpuProjectsLocationsNodesCreateRequest withPathParams(TpuProjectsLocationsNodesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesCreateQueryParams queryParams;
    public TpuProjectsLocationsNodesCreateRequest withQueryParams(TpuProjectsLocationsNodesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NodeInput request;
    public TpuProjectsLocationsNodesCreateRequest withRequest(openapisdk.models.shared.NodeInput request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesCreateSecurity security;
    public TpuProjectsLocationsNodesCreateRequest withSecurity(TpuProjectsLocationsNodesCreateSecurity security) {
        this.security = security;
        return this;
    }
}