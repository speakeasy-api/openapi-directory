package openapisdk.models.operations;



public class PostV05UsersAuthOnFetchModesResponse {
    public byte[] body;
    public PostV05UsersAuthOnFetchModesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05UsersAuthOnFetchModesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05UsersAuthOnFetchModesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05UsersAuthOnFetchModesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}