package openapisdk.models.operations;



public class GetConsumerV1CustomersSubscriptionsIdResponse {
    public String contentType;
    public GetConsumerV1CustomersSubscriptionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel;
    public GetConsumerV1CustomersSubscriptionsIdResponse withCustomerSubscriptionViewModel(openapisdk.models.shared.CustomerSubscriptionViewModel customerSubscriptionViewModel) {
        this.customerSubscriptionViewModel = customerSubscriptionViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersSubscriptionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}