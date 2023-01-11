package openapisdk.models.operations;



public class PostV05CareContextsOnDiscoverResponse {
    public byte[] body;
    public PostV05CareContextsOnDiscoverResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05CareContextsOnDiscoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05CareContextsOnDiscoverResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05CareContextsOnDiscoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}