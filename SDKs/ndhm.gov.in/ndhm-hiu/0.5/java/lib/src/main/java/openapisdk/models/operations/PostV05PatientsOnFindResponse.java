package openapisdk.models.operations;



public class PostV05PatientsOnFindResponse {
    public byte[] body;
    public PostV05PatientsOnFindResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsOnFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsOnFindResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsOnFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}