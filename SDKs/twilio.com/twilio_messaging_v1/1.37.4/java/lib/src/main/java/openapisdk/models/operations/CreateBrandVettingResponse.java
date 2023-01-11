package openapisdk.models.operations;



public class CreateBrandVettingResponse {
    public String contentType;
    public CreateBrandVettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBrandVettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting messagingV1BrandRegistrationsBrandVetting;
    public CreateBrandVettingResponse withMessagingV1BrandRegistrationsBrandVetting(openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting messagingV1BrandRegistrationsBrandVetting) {
        this.messagingV1BrandRegistrationsBrandVetting = messagingV1BrandRegistrationsBrandVetting;
        return this;
    }
}