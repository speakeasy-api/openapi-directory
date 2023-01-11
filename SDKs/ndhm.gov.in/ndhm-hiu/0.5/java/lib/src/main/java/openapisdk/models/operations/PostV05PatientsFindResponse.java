package openapisdk.models.operations;



public class PostV05PatientsFindResponse {
    public byte[] body;
    public PostV05PatientsFindResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsFindResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}