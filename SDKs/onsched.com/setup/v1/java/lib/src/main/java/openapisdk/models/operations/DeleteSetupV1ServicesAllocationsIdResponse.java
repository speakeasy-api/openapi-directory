package openapisdk.models.operations;



public class DeleteSetupV1ServicesAllocationsIdResponse {
    public String contentType;
    public DeleteSetupV1ServicesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel;
    public DeleteSetupV1ServicesAllocationsIdResponse withServiceAllocationViewModel(openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel) {
        this.serviceAllocationViewModel = serviceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ServicesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}