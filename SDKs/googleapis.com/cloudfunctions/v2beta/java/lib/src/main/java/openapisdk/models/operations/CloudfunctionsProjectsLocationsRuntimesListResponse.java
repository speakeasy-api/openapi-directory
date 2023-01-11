package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsRuntimesListResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsRuntimesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuntimesResponse listRuntimesResponse;
    public CloudfunctionsProjectsLocationsRuntimesListResponse withListRuntimesResponse(openapisdk.models.shared.ListRuntimesResponse listRuntimesResponse) {
        this.listRuntimesResponse = listRuntimesResponse;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsRuntimesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}