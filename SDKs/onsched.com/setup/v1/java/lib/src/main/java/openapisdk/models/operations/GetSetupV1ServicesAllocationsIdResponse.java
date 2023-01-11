package openapisdk.models.operations;



public class GetSetupV1ServicesAllocationsIdResponse {
    public String contentType;
    public GetSetupV1ServicesAllocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel;
    public GetSetupV1ServicesAllocationsIdResponse withServiceAllocationViewModel(openapisdk.models.shared.ServiceAllocationViewModel serviceAllocationViewModel) {
        this.serviceAllocationViewModel = serviceAllocationViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesAllocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}