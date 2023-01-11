package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1Service messagingV1Service;
    public UpdateServiceResponse withMessagingV1Service(openapisdk.models.shared.MessagingV1Service messagingV1Service) {
        this.messagingV1Service = messagingV1Service;
        return this;
    }
}