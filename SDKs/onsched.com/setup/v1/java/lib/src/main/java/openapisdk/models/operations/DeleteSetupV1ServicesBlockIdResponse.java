package openapisdk.models.operations;



public class DeleteSetupV1ServicesBlockIdResponse {
    public String contentType;
    public DeleteSetupV1ServicesBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public DeleteSetupV1ServicesBlockIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ServicesBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}