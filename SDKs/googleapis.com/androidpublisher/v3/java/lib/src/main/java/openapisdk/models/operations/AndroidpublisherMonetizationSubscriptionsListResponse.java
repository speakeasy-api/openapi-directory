package openapisdk.models.operations;



public class AndroidpublisherMonetizationSubscriptionsListResponse {
    public String contentType;
    public AndroidpublisherMonetizationSubscriptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscriptionsResponse listSubscriptionsResponse;
    public AndroidpublisherMonetizationSubscriptionsListResponse withListSubscriptionsResponse(openapisdk.models.shared.ListSubscriptionsResponse listSubscriptionsResponse) {
        this.listSubscriptionsResponse = listSubscriptionsResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherMonetizationSubscriptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}