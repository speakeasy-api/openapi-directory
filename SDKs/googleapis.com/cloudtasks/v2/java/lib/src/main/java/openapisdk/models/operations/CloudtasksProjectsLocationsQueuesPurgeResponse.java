package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesPurgeResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesPurgeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue queue;
    public CloudtasksProjectsLocationsQueuesPurgeResponse withQueue(openapisdk.models.shared.Queue queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesPurgeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}