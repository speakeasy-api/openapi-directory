package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksCreateResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CloudtasksProjectsLocationsQueuesTasksCreateResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}