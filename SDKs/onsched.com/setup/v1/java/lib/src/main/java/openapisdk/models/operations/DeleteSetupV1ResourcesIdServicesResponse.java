package openapisdk.models.operations;



public class DeleteSetupV1ResourcesIdServicesResponse {
    public String contentType;
    public DeleteSetupV1ResourcesIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public DeleteSetupV1ResourcesIdServicesResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ResourcesIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}