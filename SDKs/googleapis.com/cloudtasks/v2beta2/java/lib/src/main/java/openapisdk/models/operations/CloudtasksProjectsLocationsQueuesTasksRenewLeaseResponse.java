package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}