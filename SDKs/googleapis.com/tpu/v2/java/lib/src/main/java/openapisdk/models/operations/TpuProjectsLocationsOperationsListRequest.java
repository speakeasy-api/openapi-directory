package openapisdk.models.operations;



public class TpuProjectsLocationsOperationsListRequest {
    public TpuProjectsLocationsOperationsListPathParams pathParams;
    public TpuProjectsLocationsOperationsListRequest withPathParams(TpuProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsOperationsListQueryParams queryParams;
    public TpuProjectsLocationsOperationsListRequest withQueryParams(TpuProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TpuProjectsLocationsOperationsListSecurity security;
    public TpuProjectsLocationsOperationsListRequest withSecurity(TpuProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}