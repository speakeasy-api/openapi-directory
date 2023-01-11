package openapisdk.models.operations;



public class PostSetupV1ResourcesIdBlockResponse {
    public String contentType;
    public PostSetupV1ResourcesIdBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public PostSetupV1ResourcesIdBlockResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesIdBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}