package openapisdk.models.operations;



public class FetchUsAppToPersonResponse {
    public String contentType;
    public FetchUsAppToPersonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUsAppToPersonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceUsAppToPerson messagingV1ServiceUsAppToPerson;
    public FetchUsAppToPersonResponse withMessagingV1ServiceUsAppToPerson(openapisdk.models.shared.MessagingV1ServiceUsAppToPerson messagingV1ServiceUsAppToPerson) {
        this.messagingV1ServiceUsAppToPerson = messagingV1ServiceUsAppToPerson;
        return this;
    }
}