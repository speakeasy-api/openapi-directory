package openapisdk.models.operations;



public class PostV05SubscriptionRequestsCmInitResponse {
    public byte[] body;
    public PostV05SubscriptionRequestsCmInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05SubscriptionRequestsCmInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05SubscriptionRequestsCmInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05SubscriptionRequestsCmInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}