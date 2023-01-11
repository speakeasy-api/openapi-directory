package openapisdk.models.operations;



public class GetSetupV1ServicesIdResourcesResponse {
    public String contentType;
    public GetSetupV1ServicesIdResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceListViewModel;
    public GetSetupV1ServicesIdResourcesResponse withResourceListViewModel(java.util.Map<String, Object> resourceListViewModel) {
        this.resourceListViewModel = resourceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesIdResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}