package openapisdk.models.operations;



public class PostV05ConsentRequestsOnStatusResponse {
    public byte[] body;
    public PostV05ConsentRequestsOnStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05ConsentRequestsOnStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05ConsentRequestsOnStatusResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05ConsentRequestsOnStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}