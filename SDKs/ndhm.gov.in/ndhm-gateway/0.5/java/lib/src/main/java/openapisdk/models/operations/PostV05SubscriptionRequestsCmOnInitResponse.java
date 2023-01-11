package openapisdk.models.operations;



public class PostV05SubscriptionRequestsCmOnInitResponse {
    public byte[] body;
    public PostV05SubscriptionRequestsCmOnInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05SubscriptionRequestsCmOnInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05SubscriptionRequestsCmOnInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05SubscriptionRequestsCmOnInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}