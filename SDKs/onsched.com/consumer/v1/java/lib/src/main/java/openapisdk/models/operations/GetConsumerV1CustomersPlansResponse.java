package openapisdk.models.operations;



public class GetConsumerV1CustomersPlansResponse {
    public String contentType;
    public GetConsumerV1CustomersPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> customerPlanListViewModel;
    public GetConsumerV1CustomersPlansResponse withCustomerPlanListViewModel(java.util.Map<String, Object> customerPlanListViewModel) {
        this.customerPlanListViewModel = customerPlanListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}