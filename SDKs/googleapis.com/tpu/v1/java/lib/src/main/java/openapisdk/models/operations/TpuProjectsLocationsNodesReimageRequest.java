package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesReimageRequest {
    public TpuProjectsLocationsNodesReimagePathParams pathParams;
    public TpuProjectsLocationsNodesReimageRequest withPathParams(TpuProjectsLocationsNodesReimagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesReimageQueryParams queryParams;
    public TpuProjectsLocationsNodesReimageRequest withQueryParams(TpuProjectsLocationsNodesReimageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReimageNodeRequest request;
    public TpuProjectsLocationsNodesReimageRequest withRequest(openapisdk.models.shared.ReimageNodeRequest request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesReimageSecurity security;
    public TpuProjectsLocationsNodesReimageRequest withSecurity(TpuProjectsLocationsNodesReimageSecurity security) {
        this.security = security;
        return this;
    }
}