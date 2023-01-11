package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1Service messagingV1Service;
    public FetchServiceResponse withMessagingV1Service(openapisdk.models.shared.MessagingV1Service messagingV1Service) {
        this.messagingV1Service = messagingV1Service;
        return this;
    }
}