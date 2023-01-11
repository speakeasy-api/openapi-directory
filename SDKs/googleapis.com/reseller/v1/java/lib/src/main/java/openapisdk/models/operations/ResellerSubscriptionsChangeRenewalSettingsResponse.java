package openapisdk.models.operations;



public class ResellerSubscriptionsChangeRenewalSettingsResponse {
    public String contentType;
    public ResellerSubscriptionsChangeRenewalSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResellerSubscriptionsChangeRenewalSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subscription subscription;
    public ResellerSubscriptionsChangeRenewalSettingsResponse withSubscription(openapisdk.models.shared.Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}