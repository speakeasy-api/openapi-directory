package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesPatchRequest {
    public TpuProjectsLocationsNodesPatchPathParams pathParams;
    public TpuProjectsLocationsNodesPatchRequest withPathParams(TpuProjectsLocationsNodesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesPatchQueryParams queryParams;
    public TpuProjectsLocationsNodesPatchRequest withQueryParams(TpuProjectsLocationsNodesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NodeInput request;
    public TpuProjectsLocationsNodesPatchRequest withRequest(openapisdk.models.shared.NodeInput request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesPatchSecurity security;
    public TpuProjectsLocationsNodesPatchRequest withSecurity(TpuProjectsLocationsNodesPatchSecurity security) {
        this.security = security;
        return this;
    }
}