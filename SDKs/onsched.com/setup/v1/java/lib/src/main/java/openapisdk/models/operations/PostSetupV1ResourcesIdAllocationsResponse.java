package openapisdk.models.operations;



public class PostSetupV1ResourcesIdAllocationsResponse {
    public String contentType;
    public PostSetupV1ResourcesIdAllocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public PostSetupV1ResourcesIdAllocationsResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesIdAllocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}