package openapisdk.models.operations;



public class PutSetupV1ServicesAllocationsIdResponse {
    public String contentType;
    public PutSetupV1ServicesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel;
    public PutSetupV1ServicesAllocationsIdResponse withServiceAllocationViewModel(openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel) {
        this.serviceAllocationViewModel = serviceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ServicesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}