package openapisdk.models.operations;



public class PostV05PatientsSmsNotifyResponse {
    public byte[] body;
    public PostV05PatientsSmsNotifyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsSmsNotifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsSmsNotifyResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsSmsNotifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}