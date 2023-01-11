package openapisdk.models.operations;



public class PostV05UsersAuthNotifyResponse {
    public byte[] body;
    public PostV05UsersAuthNotifyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthNotifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthNotifyResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthNotifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}