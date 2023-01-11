package openapisdk.models.operations;



public class PostV05HealthInformationHipRequestResponse {
    public byte[] body;
    public PostV05HealthInformationHipRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05HealthInformationHipRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05HealthInformationHipRequestResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05HealthInformationHipRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}