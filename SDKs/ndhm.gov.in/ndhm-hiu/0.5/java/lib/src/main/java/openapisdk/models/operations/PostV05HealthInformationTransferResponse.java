package openapisdk.models.operations;



public class PostV05HealthInformationTransferResponse {
    public byte[] body;
    public PostV05HealthInformationTransferResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05HealthInformationTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05HealthInformationTransferResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05HealthInformationTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}