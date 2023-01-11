package openapisdk.models.operations;



public class GetSetupV1CustomersIdResponse {
    public String contentType;
    public GetSetupV1CustomersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerViewModel customerViewModel;
    public GetSetupV1CustomersIdResponse withCustomerViewModel(openapisdk.models.shared.CustomerViewModel customerViewModel) {
        this.customerViewModel = customerViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CustomersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}