package openapisdk.models.operations;



public class GetConsumerV1CustomersSubscriptionsResponse {
    public String contentType;
    public GetConsumerV1CustomersSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customerSubscriptionListViewModel;
    public GetConsumerV1CustomersSubscriptionsResponse withCustomerSubscriptionListViewModel(java.util.Map<String, Object> customerSubscriptionListViewModel) {
        this.customerSubscriptionListViewModel = customerSubscriptionListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}