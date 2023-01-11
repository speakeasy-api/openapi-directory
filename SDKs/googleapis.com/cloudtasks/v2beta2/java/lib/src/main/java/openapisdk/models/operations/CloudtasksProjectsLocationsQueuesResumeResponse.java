package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesResumeResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue1 queue;
    public CloudtasksProjectsLocationsQueuesResumeResponse withQueue(openapisdk.models.shared.Queue1 queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}