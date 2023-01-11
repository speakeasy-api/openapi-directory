package openapisdk.models.operations;



public class FetchQueueResponse {
    public String contentType;
    public FetchQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue;
    public FetchQueueResponse withApiV2010AccountQueue(openapisdk.models.shared.ApiV2010AccountQueue apiV2010AccountQueue) {
        this.apiV2010AccountQueue = apiV2010AccountQueue;
        return this;
    }
}