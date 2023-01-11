package openapisdk.models.operations;



public class GetConsumerV1CustomersResponse {
    public String contentType;
    public GetConsumerV1CustomersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customerListViewModel;
    public GetConsumerV1CustomersResponse withCustomerListViewModel(java.util.Map<String, Object> customerListViewModel) {
        this.customerListViewModel = customerListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}