package openapisdk.models.operations;



public class DeleteSetupV1ResourcesIdResponse {
    public String contentType;
    public DeleteSetupV1ResourcesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public DeleteSetupV1ResourcesIdResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ResourcesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}