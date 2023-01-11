package openapisdk.models.operations;



public class PostConsumerV1CustomersIdSubscriptionsResponse {
    public String contentType;
    public PostConsumerV1CustomersIdSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel;
    public PostConsumerV1CustomersIdSubscriptionsResponse withCustomerSubscriptionViewModel(openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel) {
        this.customerSubscriptionViewModel = customerSubscriptionViewModel;
        return this;
    }
    public Long statusCode;
    public PostConsumerV1CustomersIdSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}