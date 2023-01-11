package openapisdk.models.operations;



public class FetchPhoneNumberResponse {
    public String contentType;
    public FetchPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServicePhoneNumber messagingV1ServicePhoneNumber;
    public FetchPhoneNumberResponse withMessagingV1ServicePhoneNumber(openapisdk.models.shared.MessagingV1ServicePhoneNumber messagingV1ServicePhoneNumber) {
        this.messagingV1ServicePhoneNumber = messagingV1ServicePhoneNumber;
        return this;
    }
}