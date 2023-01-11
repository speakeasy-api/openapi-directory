package openapisdk.models.operations;



public class FetchUsecaseResponse {
    public String contentType;
    public FetchUsecaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUsecaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1Usecase messagingV1Usecase;
    public FetchUsecaseResponse withMessagingV1Usecase(openapisdk.models.shared.MessagingV1Usecase messagingV1Usecase) {
        this.messagingV1Usecase = messagingV1Usecase;
        return this;
    }
}