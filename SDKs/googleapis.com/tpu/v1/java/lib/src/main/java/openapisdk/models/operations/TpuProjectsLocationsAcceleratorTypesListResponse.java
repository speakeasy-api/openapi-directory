package openapisdk.models.operations;



public class TpuProjectsLocationsAcceleratorTypesListResponse {
    public String contentType;
    public TpuProjectsLocationsAcceleratorTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAcceleratorTypesResponse listAcceleratorTypesResponse;
    public TpuProjectsLocationsAcceleratorTypesListResponse withListAcceleratorTypesResponse(openapisdk.models.shared.ListAcceleratorTypesResponse listAcceleratorTypesResponse) {
        this.listAcceleratorTypesResponse = listAcceleratorTypesResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsAcceleratorTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}