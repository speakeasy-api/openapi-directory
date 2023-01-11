package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesCreateResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Queue queue;
    public CloudtasksProjectsLocationsQueuesCreateResponse withQueue(openapisdk.models.shared.Queue queue) {
        this.queue = queue;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}