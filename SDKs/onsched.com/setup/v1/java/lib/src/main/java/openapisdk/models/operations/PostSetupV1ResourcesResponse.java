package openapisdk.models.operations;



public class PostSetupV1ResourcesResponse {
    public String contentType;
    public PostSetupV1ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PostSetupV1ResourcesResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}