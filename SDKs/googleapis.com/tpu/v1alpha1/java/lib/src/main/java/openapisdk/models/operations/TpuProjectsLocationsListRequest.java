package openapisdk.models.operations;



public class TpuProjectsLocationsListRequest {
    public TpuProjectsLocationsListPathParams pathParams;
    public TpuProjectsLocationsListRequest withPathParams(TpuProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsListQueryParams queryParams;
    public TpuProjectsLocationsListRequest withQueryParams(TpuProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TpuProjectsLocationsListSecurity security;
    public TpuProjectsLocationsListRequest withSecurity(TpuProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}