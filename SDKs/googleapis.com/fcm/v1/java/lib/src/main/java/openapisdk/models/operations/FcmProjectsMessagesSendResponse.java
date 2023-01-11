package openapisdk.models.operations;



public class FcmProjectsMessagesSendResponse {
    public String contentType;
    public FcmProjectsMessagesSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Message message;
    public FcmProjectsMessagesSendResponse withMessage(openapisdk.models.shared.Message message) {
        this.message = message;
        return this;
    }
    public Long statusCode;
    public FcmProjectsMessagesSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}