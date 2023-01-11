package openapisdk.models.operations;



public class CreateQueueResponse {
    public String contentType;
    public CreateQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue;
    public CreateQueueResponse withApiV2010AccountQueue(openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue) {
        this.apiV2010AccountQueue = apiV2010AccountQueue;
        return this;
    }
}