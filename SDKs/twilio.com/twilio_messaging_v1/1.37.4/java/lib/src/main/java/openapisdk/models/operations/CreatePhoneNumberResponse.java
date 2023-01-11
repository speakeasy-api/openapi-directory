package openapisdk.models.operations;



public class CreatePhoneNumberResponse {
    public String contentType;
    public CreatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServicePhoneNumber messagingV1ServicePhoneNumber;
    public CreatePhoneNumberResponse withMessagingV1ServicePhoneNumber(openapisdk.models.shared.MessagingV1ServicePhoneNumber messagingV1ServicePhoneNumber) {
        this.messagingV1ServicePhoneNumber = messagingV1ServicePhoneNumber;
        return this;
    }
}