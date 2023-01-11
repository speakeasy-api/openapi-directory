package openapisdk.models.operations;



public class CreateUsAppToPersonResponse {
    public String contentType;
    public CreateUsAppToPersonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUsAppToPersonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceUsAppToPerson messagingV1ServiceUsAppToPerson;
    public CreateUsAppToPersonResponse withMessagingV1ServiceUsAppToPerson(openapisdk.models.shared.MessagingV1ServiceUsAppToPerson messagingV1ServiceUsAppToPerson) {
        this.messagingV1ServiceUsAppToPerson = messagingV1ServiceUsAppToPerson;
        return this;
    }
}