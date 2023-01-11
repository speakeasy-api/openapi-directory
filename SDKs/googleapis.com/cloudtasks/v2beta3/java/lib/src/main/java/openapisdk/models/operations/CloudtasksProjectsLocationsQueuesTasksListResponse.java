package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksListResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTasksResponse listTasksResponse;
    public CloudtasksProjectsLocationsQueuesTasksListResponse withListTasksResponse(openapisdk.models.shared.ListTasksResponse listTasksResponse) {
        this.listTasksResponse = listTasksResponse;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}