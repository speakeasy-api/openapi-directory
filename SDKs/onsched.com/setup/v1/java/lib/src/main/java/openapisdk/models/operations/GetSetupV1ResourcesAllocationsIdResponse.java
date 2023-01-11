package openapisdk.models.operations;



public class GetSetupV1ResourcesAllocationsIdResponse {
    public String contentType;
    public GetSetupV1ResourcesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceAllocationViewModel resourceAllocationViewModel;
    public GetSetupV1ResourcesAllocationsIdResponse withResourceAllocationViewModel(openapisdk.models.shared.ResourceAllocationViewModel resourceAllocationViewModel) {
        this.resourceAllocationViewModel = resourceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}