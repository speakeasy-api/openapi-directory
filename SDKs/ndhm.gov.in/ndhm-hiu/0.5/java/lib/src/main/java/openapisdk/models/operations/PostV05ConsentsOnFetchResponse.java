package openapisdk.models.operations;



public class PostV05ConsentsOnFetchResponse {
    public byte[] body;
    public PostV05ConsentsOnFetchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05ConsentsOnFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05ConsentsOnFetchResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05ConsentsOnFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}