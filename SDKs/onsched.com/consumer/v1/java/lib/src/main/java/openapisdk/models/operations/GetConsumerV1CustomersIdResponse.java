package openapisdk.models.operations;



public class GetConsumerV1CustomersIdResponse {
    public String contentType;
    public GetConsumerV1CustomersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerViewModel customerViewModel;
    public GetConsumerV1CustomersIdResponse withCustomerViewModel(openapisdk.models.shared.CustomerViewModel customerViewModel) {
        this.customerViewModel = customerViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}