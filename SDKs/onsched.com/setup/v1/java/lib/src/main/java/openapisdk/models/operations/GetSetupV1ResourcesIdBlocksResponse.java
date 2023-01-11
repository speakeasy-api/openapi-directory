package openapisdk.models.operations;



public class GetSetupV1ResourcesIdBlocksResponse {
    public String contentType;
    public GetSetupV1ResourcesIdBlocksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceBlockListViewModel;
    public GetSetupV1ResourcesIdBlocksResponse withResourceBlockListViewModel(java.util.Map<String, Object> resourceBlockListViewModel) {
        this.resourceBlockListViewModel = resourceBlockListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesIdBlocksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}