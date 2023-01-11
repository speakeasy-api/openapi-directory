package openapisdk.models.operations;



public class GetConsumerV1CustomersIdSubscriptionsResponse {
    public String contentType;
    public GetConsumerV1CustomersIdSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel;
    public GetConsumerV1CustomersIdSubscriptionsResponse withCustomerSubscriptionViewModel(openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel) {
        this.customerSubscriptionViewModel = customerSubscriptionViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersIdSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}