package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesStopRequest {
    public TpuProjectsLocationsNodesStopPathParams pathParams;
    public TpuProjectsLocationsNodesStopRequest withPathParams(TpuProjectsLocationsNodesStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesStopQueryParams queryParams;
    public TpuProjectsLocationsNodesStopRequest withQueryParams(TpuProjectsLocationsNodesStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public TpuProjectsLocationsNodesStopRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesStopSecurity security;
    public TpuProjectsLocationsNodesStopRequest withSecurity(TpuProjectsLocationsNodesStopSecurity security) {
        this.security = security;
        return this;
    }
}