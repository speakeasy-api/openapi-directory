package openapisdk.models.operations;



public class GetSetupV1ServicesBlocksIdResponse {
    public String contentType;
    public GetSetupV1ServicesBlocksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public GetSetupV1ServicesBlocksIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesBlocksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}