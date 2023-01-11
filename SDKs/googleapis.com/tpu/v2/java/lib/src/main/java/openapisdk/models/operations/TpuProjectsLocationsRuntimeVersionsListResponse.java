package openapisdk.models.operations;



public class TpuProjectsLocationsRuntimeVersionsListResponse {
    public String contentType;
    public TpuProjectsLocationsRuntimeVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuntimeVersionsResponse listRuntimeVersionsResponse;
    public TpuProjectsLocationsRuntimeVersionsListResponse withListRuntimeVersionsResponse(openapisdk.models.shared.ListRuntimeVersionsResponse listRuntimeVersionsResponse) {
        this.listRuntimeVersionsResponse = listRuntimeVersionsResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsRuntimeVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}