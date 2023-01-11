package openapisdk.models.operations;



public class PostSetupV1ResourcesIdServicesResponse {
    public String contentType;
    public PostSetupV1ResourcesIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PostSetupV1ResourcesIdServicesResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}