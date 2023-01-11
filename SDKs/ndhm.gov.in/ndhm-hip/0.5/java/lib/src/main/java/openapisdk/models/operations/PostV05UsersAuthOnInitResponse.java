package openapisdk.models.operations;



public class PostV05UsersAuthOnInitResponse {
    public byte[] body;
    public PostV05UsersAuthOnInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthOnInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthOnInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthOnInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}