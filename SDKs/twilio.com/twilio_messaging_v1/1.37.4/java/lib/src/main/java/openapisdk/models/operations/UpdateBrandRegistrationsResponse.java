package openapisdk.models.operations;



public class UpdateBrandRegistrationsResponse {
    public String contentType;
    public UpdateBrandRegistrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBrandRegistrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations;
    public UpdateBrandRegistrationsResponse withMessagingV1BrandRegistrations(openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations) {
        this.messagingV1BrandRegistrations = messagingV1BrandRegistrations;
        return this;
    }
}