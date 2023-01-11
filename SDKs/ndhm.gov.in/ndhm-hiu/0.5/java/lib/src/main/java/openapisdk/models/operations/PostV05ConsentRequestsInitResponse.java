package openapisdk.models.operations;



public class PostV05ConsentRequestsInitResponse {
    public byte[] body;
    public PostV05ConsentRequestsInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05ConsentRequestsInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05ConsentRequestsInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05ConsentRequestsInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}