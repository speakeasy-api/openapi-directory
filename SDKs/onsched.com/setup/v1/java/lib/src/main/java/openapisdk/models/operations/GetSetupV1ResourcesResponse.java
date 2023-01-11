package openapisdk.models.operations;



public class GetSetupV1ResourcesResponse {
    public String contentType;
    public GetSetupV1ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceListViewModel;
    public GetSetupV1ResourcesResponse withResourceListViewModel(java.util.Map<String, Object> resourceListViewModel) {
        this.resourceListViewModel = resourceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}