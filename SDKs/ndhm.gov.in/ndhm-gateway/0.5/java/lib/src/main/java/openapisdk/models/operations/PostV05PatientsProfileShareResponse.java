package openapisdk.models.operations;



public class PostV05PatientsProfileShareResponse {
    public byte[] body;
    public PostV05PatientsProfileShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsProfileShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsProfileShareResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsProfileShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}