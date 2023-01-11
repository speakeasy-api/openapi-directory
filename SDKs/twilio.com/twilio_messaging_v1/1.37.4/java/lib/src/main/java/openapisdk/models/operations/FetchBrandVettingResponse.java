package openapisdk.models.operations;



public class FetchBrandVettingResponse {
    public String contentType;
    public FetchBrandVettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBrandVettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting messagingV1BrandRegistrationsBrandVetting;
    public FetchBrandVettingResponse withMessagingV1BrandRegistrationsBrandVetting(openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting messagingV1BrandRegistrationsBrandVetting) {
        this.messagingV1BrandRegistrationsBrandVetting = messagingV1BrandRegistrationsBrandVetting;
        return this;
    }
}