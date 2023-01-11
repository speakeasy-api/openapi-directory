package openapisdk.models.operations;



public class GetConsumerV1CustomersPlansIdResponse {
    public String contentType;
    public GetConsumerV1CustomersPlansIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerPlanViewModel customerPlanViewModel;
    public GetConsumerV1CustomersPlansIdResponse withCustomerPlanViewModel(openapisdk.models.shared.CustomerPlanViewModel customerPlanViewModel) {
        this.customerPlanViewModel = customerPlanViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersPlansIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}