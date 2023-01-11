package openapisdk.models.operations;



public class PutSetupV1ResourcesIdRecoverResponse {
    public String contentType;
    public PutSetupV1ResourcesIdRecoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PutSetupV1ResourcesIdRecoverResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesIdRecoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}