package openapisdk.models.operations;



public class GetSetupV1ResourcesBlocksIdResponse {
    public String contentType;
    public GetSetupV1ResourcesBlocksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel;
    public GetSetupV1ResourcesBlocksIdResponse withResourceBlockViewModel(openapisdk.models.shared.ResourceBlockViewModel resourceBlockViewModel) {
        this.resourceBlockViewModel = resourceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesBlocksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}