package openapisdk.models.operations;



public class FetchBrandRegistrationsResponse {
    public String contentType;
    public FetchBrandRegistrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBrandRegistrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations;
    public FetchBrandRegistrationsResponse withMessagingV1BrandRegistrations(openapisdk.models.shared.MessagingV1BrandRegistrations messagingV1BrandRegistrations) {
        this.messagingV1BrandRegistrations = messagingV1BrandRegistrations;
        return this;
    }
}