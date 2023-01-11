package openapisdk.models.operations;



public class PostV05UsersAuthOnNotifyResponse {
    public byte[] body;
    public PostV05UsersAuthOnNotifyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthOnNotifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthOnNotifyResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthOnNotifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}