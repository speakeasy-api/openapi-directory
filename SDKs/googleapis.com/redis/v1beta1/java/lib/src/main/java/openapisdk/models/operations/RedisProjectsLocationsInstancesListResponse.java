package openapisdk.models.operations;



public class RedisProjectsLocationsInstancesListResponse {
    public String contentType;
    public RedisProjectsLocationsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public RedisProjectsLocationsInstancesListResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public RedisProjectsLocationsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}