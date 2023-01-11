package openapisdk.models.operations;



public class PutSetupV1ResourcesIdResponse {
    public String contentType;
    public PutSetupV1ResourcesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PutSetupV1ResourcesIdResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}