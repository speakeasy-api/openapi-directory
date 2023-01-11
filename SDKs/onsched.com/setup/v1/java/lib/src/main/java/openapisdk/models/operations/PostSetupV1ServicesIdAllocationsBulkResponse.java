package openapisdk.models.operations;



public class PostSetupV1ServicesIdAllocationsBulkResponse {
    public String contentType;
    public PostSetupV1ServicesIdAllocationsBulkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceAllocationViewModel[] serviceAllocationViewModels;
    public PostSetupV1ServicesIdAllocationsBulkResponse withServiceAllocationViewModels(openapisdk.models.shared.ServiceAllocationViewModel[] serviceAllocationViewModels) {
        this.serviceAllocationViewModels = serviceAllocationViewModels;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesIdAllocationsBulkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}