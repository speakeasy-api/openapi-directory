package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsQueuedResourcesCreateRequest {
    public TpuProjectsLocationsQueuedResourcesCreatePathParams pathParams;
    public TpuProjectsLocationsQueuedResourcesCreateRequest withPathParams(TpuProjectsLocationsQueuedResourcesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsQueuedResourcesCreateQueryParams queryParams;
    public TpuProjectsLocationsQueuedResourcesCreateRequest withQueryParams(TpuProjectsLocationsQueuedResourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueuedResourceInput request;
    public TpuProjectsLocationsQueuedResourcesCreateRequest withRequest(openapisdk.models.shared.QueuedResourceInput request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsQueuedResourcesCreateSecurity security;
    public TpuProjectsLocationsQueuedResourcesCreateRequest withSecurity(TpuProjectsLocationsQueuedResourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}