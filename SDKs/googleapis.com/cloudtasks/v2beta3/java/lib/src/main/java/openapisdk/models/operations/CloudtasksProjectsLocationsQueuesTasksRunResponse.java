package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksRunResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CloudtasksProjectsLocationsQueuesTasksRunResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}