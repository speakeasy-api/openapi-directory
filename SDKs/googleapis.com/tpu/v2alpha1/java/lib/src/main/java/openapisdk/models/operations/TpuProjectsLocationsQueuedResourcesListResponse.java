package openapisdk.models.operations;



public class TpuProjectsLocationsQueuedResourcesListResponse {
    public String contentType;
    public TpuProjectsLocationsQueuedResourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQueuedResourcesResponse listQueuedResourcesResponse;
    public TpuProjectsLocationsQueuedResourcesListResponse withListQueuedResourcesResponse(openapisdk.models.shared.ListQueuedResourcesResponse listQueuedResourcesResponse) {
        this.listQueuedResourcesResponse = listQueuedResourcesResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsQueuedResourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}