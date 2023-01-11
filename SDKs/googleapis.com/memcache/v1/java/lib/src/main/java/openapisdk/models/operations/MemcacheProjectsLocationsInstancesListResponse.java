package openapisdk.models.operations;



public class MemcacheProjectsLocationsInstancesListResponse {
    public String contentType;
    public MemcacheProjectsLocationsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public MemcacheProjectsLocationsInstancesListResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public MemcacheProjectsLocationsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}