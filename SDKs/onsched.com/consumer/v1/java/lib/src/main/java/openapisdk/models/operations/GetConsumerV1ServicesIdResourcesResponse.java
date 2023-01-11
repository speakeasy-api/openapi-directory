package openapisdk.models.operations;



public class GetConsumerV1ServicesIdResourcesResponse {
    public String contentType;
    public GetConsumerV1ServicesIdResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceListViewModel;
    public GetConsumerV1ServicesIdResourcesResponse withResourceListViewModel(java.util.Map<String, Object> resourceListViewModel) {
        this.resourceListViewModel = resourceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicesIdResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}