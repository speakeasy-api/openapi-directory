package openapisdk.models.operations;



public class GetSetupV1CustomersResponse {
    public String contentType;
    public GetSetupV1CustomersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customerListViewModel;
    public GetSetupV1CustomersResponse withCustomerListViewModel(java.util.Map<String, Object> customerListViewModel) {
        this.customerListViewModel = customerListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CustomersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}