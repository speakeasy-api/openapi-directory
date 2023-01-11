package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}