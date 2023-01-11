package openapisdk.models.operations;



public class BatchProjectsLocationsJobsTaskGroupsTasksListResponse {
    public String contentType;
    public BatchProjectsLocationsJobsTaskGroupsTasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTasksResponse listTasksResponse;
    public BatchProjectsLocationsJobsTaskGroupsTasksListResponse withListTasksResponse(openapisdk.models.shared.ListTasksResponse listTasksResponse) {
        this.listTasksResponse = listTasksResponse;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsJobsTaskGroupsTasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}