package openapisdk.models.operations;



public class FetchUsAppToPersonUsecaseResponse {
    public String contentType;
    public FetchUsAppToPersonUsecaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUsAppToPersonUsecaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ServiceUsAppToPersonUsecase messagingV1ServiceUsAppToPersonUsecase;
    public FetchUsAppToPersonUsecaseResponse withMessagingV1ServiceUsAppToPersonUsecase(openapisdk.models.shared.MessagingV1ServiceUsAppToPersonUsecase messagingV1ServiceUsAppToPersonUsecase) {
        this.messagingV1ServiceUsAppToPersonUsecase = messagingV1ServiceUsAppToPersonUsecase;
        return this;
    }
}