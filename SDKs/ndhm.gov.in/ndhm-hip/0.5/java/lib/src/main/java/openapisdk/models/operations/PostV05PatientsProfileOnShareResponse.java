package openapisdk.models.operations;



public class PostV05PatientsProfileOnShareResponse {
    public byte[] body;
    public PostV05PatientsProfileOnShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsProfileOnShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsProfileOnShareResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsProfileOnShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}