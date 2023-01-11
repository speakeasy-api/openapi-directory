package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesStartRequest {
    public TpuProjectsLocationsNodesStartPathParams pathParams;
    public TpuProjectsLocationsNodesStartRequest withPathParams(TpuProjectsLocationsNodesStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesStartQueryParams queryParams;
    public TpuProjectsLocationsNodesStartRequest withQueryParams(TpuProjectsLocationsNodesStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public TpuProjectsLocationsNodesStartRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesStartSecurity security;
    public TpuProjectsLocationsNodesStartRequest withSecurity(TpuProjectsLocationsNodesStartSecurity security) {
        this.security = security;
        return this;
    }
}