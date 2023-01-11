package openapisdk.models.operations;



public class TpuProjectsLocationsQueuedResourcesListRequest {
    public TpuProjectsLocationsQueuedResourcesListPathParams pathParams;
    public TpuProjectsLocationsQueuedResourcesListRequest withPathParams(TpuProjectsLocationsQueuedResourcesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsQueuedResourcesListQueryParams queryParams;
    public TpuProjectsLocationsQueuedResourcesListRequest withQueryParams(TpuProjectsLocationsQueuedResourcesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TpuProjectsLocationsQueuedResourcesListSecurity security;
    public TpuProjectsLocationsQueuedResourcesListRequest withSecurity(TpuProjectsLocationsQueuedResourcesListSecurity security) {
        this.security = security;
        return this;
    }
}