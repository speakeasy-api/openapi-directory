package openapisdk.models.operations;



public class CreateBrandRegistrationsResponse {
    public String contentType;
    public CreateBrandRegistrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBrandRegistrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations;
    public CreateBrandRegistrationsResponse withMessagingV1BrandRegistrations(openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations) {
        this.messagingV1BrandRegistrations = messagingV1BrandRegistrations;
        return this;
    }
}