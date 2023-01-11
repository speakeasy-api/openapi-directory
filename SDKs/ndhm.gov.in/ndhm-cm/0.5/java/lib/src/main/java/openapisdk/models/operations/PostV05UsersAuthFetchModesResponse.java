package openapisdk.models.operations;



public class PostV05UsersAuthFetchModesResponse {
    public byte[] body;
    public PostV05UsersAuthFetchModesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthFetchModesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthFetchModesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthFetchModesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}