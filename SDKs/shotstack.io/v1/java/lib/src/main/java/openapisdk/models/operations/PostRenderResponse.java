package openapisdk.models.operations;



public class PostRenderResponse {
    public String contentType;
    public PostRenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueuedResponse queuedResponse;
    public PostRenderResponse withQueuedResponse(openapisdk.models.shared.QueuedResponse queuedResponse) {
        this.queuedResponse = queuedResponse;
        return this;
    }
    public Long statusCode;
    public PostRenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}