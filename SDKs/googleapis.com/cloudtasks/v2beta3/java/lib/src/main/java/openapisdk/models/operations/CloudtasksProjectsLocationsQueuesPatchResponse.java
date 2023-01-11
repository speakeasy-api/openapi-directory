package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesPatchResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue1 queue;
    public CloudtasksProjectsLocationsQueuesPatchResponse withQueue(openapisdk.models.shared.Queue1 queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}