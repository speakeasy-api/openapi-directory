package openapisdk.models.operations;



public class GetConsumerV1ServicesAllocationsIdResponse {
    public String contentType;
    public GetConsumerV1ServicesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel;
    public GetConsumerV1ServicesAllocationsIdResponse withServiceAllocationViewModel(openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel) {
        this.serviceAllocationViewModel = serviceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}