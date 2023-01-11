package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1Service messagingV1Service;
    public CreateServiceResponse withMessagingV1Service(openapisdk.models.shared.MessagingV1Service messagingV1Service) {
        this.messagingV1Service = messagingV1Service;
        return this;
    }
}