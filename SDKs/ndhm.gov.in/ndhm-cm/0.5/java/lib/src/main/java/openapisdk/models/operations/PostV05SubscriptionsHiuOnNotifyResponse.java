package openapisdk.models.operations;



public class PostV05SubscriptionsHiuOnNotifyResponse {
    public byte[] body;
    public PostV05SubscriptionsHiuOnNotifyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05SubscriptionsHiuOnNotifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05SubscriptionsHiuOnNotifyResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05SubscriptionsHiuOnNotifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}