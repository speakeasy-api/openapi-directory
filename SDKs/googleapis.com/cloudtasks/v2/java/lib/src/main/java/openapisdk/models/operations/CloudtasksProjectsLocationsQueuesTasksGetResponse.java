package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksGetResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CloudtasksProjectsLocationsQueuesTasksGetResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}