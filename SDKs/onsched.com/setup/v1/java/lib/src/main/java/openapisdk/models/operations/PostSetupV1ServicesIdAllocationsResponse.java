package openapisdk.models.operations;



public class PostSetupV1ServicesIdAllocationsResponse {
    public String contentType;
    public PostSetupV1ServicesIdAllocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel;
    public PostSetupV1ServicesIdAllocationsResponse withServiceAllocationViewModel(openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel) {
        this.serviceAllocationViewModel = serviceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesIdAllocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}