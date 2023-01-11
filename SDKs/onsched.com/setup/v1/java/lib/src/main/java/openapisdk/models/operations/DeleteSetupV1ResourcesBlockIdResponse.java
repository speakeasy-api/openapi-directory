package openapisdk.models.operations;



public class DeleteSetupV1ResourcesBlockIdResponse {
    public String contentType;
    public DeleteSetupV1ResourcesBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public DeleteSetupV1ResourcesBlockIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ResourcesBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}