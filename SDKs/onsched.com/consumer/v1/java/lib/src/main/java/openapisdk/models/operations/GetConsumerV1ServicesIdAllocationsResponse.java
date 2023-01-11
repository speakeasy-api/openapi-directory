package openapisdk.models.operations;



public class GetConsumerV1ServicesIdAllocationsResponse {
    public String contentType;
    public GetConsumerV1ServicesIdAllocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceAllocationListViewModel;
    public GetConsumerV1ServicesIdAllocationsResponse withServiceAllocationListViewModel(java.util.Map<String, Object> serviceAllocationListViewModel) {
        this.serviceAllocationListViewModel = serviceAllocationListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicesIdAllocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}