package openapisdk.models.operations;



public class PostV05SessionsResponse {
    public byte[] body;
    public PostV05SessionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05SessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05SessionsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.SessionResponse sessionResponse;
    public PostV05SessionsResponse withSessionResponse(openapisdk.models.shared.SessionResponse sessionResponse) {
        this.sessionResponse = sessionResponse;
        return this;
    }
    public Long statusCode;
    public PostV05SessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}