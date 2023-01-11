package openapisdk.models.operations;



public class PubsubSubscriptionsPullResponse {
    public String contentType;
    public PubsubSubscriptionsPullResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PullResponse pullResponse;
    public PubsubSubscriptionsPullResponse withPullResponse(openapisdk.models.shared.PullResponse pullResponse) {
        this.pullResponse = pullResponse;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsPullResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}