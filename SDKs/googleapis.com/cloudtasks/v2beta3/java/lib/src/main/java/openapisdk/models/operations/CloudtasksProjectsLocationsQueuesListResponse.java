package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesListResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQueuesResponse listQueuesResponse;
    public CloudtasksProjectsLocationsQueuesListResponse withListQueuesResponse(openapisdk.models.shared.ListQueuesResponse listQueuesResponse) {
        this.listQueuesResponse = listQueuesResponse;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}