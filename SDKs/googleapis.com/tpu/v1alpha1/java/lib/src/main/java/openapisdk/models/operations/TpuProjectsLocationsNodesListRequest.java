package openapisdk.models.operations;



public class TpuProjectsLocationsNodesListRequest {
    public TpuProjectsLocationsNodesListPathParams pathParams;
    public TpuProjectsLocationsNodesListRequest withPathParams(TpuProjectsLocationsNodesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesListQueryParams queryParams;
    public TpuProjectsLocationsNodesListRequest withQueryParams(TpuProjectsLocationsNodesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TpuProjectsLocationsNodesListSecurity security;
    public TpuProjectsLocationsNodesListRequest withSecurity(TpuProjectsLocationsNodesListSecurity security) {
        this.security = security;
        return this;
    }
}