package openapisdk.models.operations;



public class UpdateQueueResponse {
    public String contentType;
    public UpdateQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue;
    public UpdateQueueResponse withApiV2010AccountQueue(openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue) {
        this.apiV2010AccountQueue = apiV2010AccountQueue;
        return this;
    }
}