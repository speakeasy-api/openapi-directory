package openapisdk.models.operations;



public class PostV05PatientsSmsOnNotifyResponse {
    public byte[] body;
    public PostV05PatientsSmsOnNotifyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05PatientsSmsOnNotifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05PatientsSmsOnNotifyResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05PatientsSmsOnNotifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}