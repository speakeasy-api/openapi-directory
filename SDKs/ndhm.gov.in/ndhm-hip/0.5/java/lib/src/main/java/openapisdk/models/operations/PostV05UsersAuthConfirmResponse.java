package openapisdk.models.operations;



public class PostV05UsersAuthConfirmResponse {
    public byte[] body;
    public PostV05UsersAuthConfirmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthConfirmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthConfirmResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthConfirmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}