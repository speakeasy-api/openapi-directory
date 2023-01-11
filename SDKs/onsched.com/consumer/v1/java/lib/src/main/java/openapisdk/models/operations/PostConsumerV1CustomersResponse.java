package openapisdk.models.operations;



public class PostConsumerV1CustomersResponse {
    public String contentType;
    public PostConsumerV1CustomersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerViewModel customerViewModel;
    public PostConsumerV1CustomersResponse withCustomerViewModel(openapisdk.models.shared.CustomerViewModel customerViewModel) {
        this.customerViewModel = customerViewModel;
        return this;
    }
    public Long statusCode;
    public PostConsumerV1CustomersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}