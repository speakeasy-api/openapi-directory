package openapisdk.models.operations;



public class PostV05HealthInformationOnRequestResponse {
    public byte[] body;
    public PostV05HealthInformationOnRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05HealthInformationOnRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05HealthInformationOnRequestResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05HealthInformationOnRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}