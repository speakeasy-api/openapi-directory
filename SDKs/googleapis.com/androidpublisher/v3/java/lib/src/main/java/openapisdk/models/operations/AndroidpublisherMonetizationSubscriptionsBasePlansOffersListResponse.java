package openapisdk.models.operations;



public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse {
    public String contentType;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscriptionOffersResponse listSubscriptionOffersResponse;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse withListSubscriptionOffersResponse(openapisdk.models.shared.ListSubscriptionOffersResponse listSubscriptionOffersResponse) {
        this.listSubscriptionOffersResponse = listSubscriptionOffersResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}