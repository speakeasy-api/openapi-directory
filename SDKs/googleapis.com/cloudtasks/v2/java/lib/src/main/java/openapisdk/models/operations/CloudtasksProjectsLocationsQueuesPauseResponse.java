package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesPauseResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue queue;
    public CloudtasksProjectsLocationsQueuesPauseResponse withQueue(openapisdk.models.shared.Queue queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}