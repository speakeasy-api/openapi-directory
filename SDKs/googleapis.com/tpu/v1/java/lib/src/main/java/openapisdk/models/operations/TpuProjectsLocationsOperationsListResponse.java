package openapisdk.models.operations;



public class TpuProjectsLocationsOperationsListResponse {
    public String contentType;
    public TpuProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public TpuProjectsLocationsOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}