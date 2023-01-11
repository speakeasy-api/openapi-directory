package openapisdk.models.operations;



public class PostV05CareContextsDiscoverResponse {
    public byte[] body;
    public PostV05CareContextsDiscoverResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05CareContextsDiscoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05CareContextsDiscoverResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05CareContextsDiscoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}