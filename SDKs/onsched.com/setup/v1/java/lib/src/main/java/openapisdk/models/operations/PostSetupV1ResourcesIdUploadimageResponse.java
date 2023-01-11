package openapisdk.models.operations;



public class PostSetupV1ResourcesIdUploadimageResponse {
    public String contentType;
    public PostSetupV1ResourcesIdUploadimageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PostSetupV1ResourcesIdUploadimageResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesIdUploadimageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}