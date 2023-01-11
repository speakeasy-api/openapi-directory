package openapisdk.models.operations;



public class GetSetupV1ResourcesIdAllocationsResponse {
    public String contentType;
    public GetSetupV1ResourcesIdAllocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceAllocationListViewModel;
    public GetSetupV1ResourcesIdAllocationsResponse withResourceAllocationListViewModel(java.util.Map<String, Object> resourceAllocationListViewModel) {
        this.resourceAllocationListViewModel = resourceAllocationListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesIdAllocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}