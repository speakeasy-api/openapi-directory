package openapisdk.models.operations;



public class PutSetupV1ResourcesBlockIdResponse {
    public String contentType;
    public PutSetupV1ResourcesBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public PutSetupV1ResourcesBlockIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}