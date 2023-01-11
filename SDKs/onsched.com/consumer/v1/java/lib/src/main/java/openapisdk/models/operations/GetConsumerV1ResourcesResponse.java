package openapisdk.models.operations;



public class GetConsumerV1ResourcesResponse {
    public String contentType;
    public GetConsumerV1ResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceListViewModel;
    public GetConsumerV1ResourcesResponse withResourceListViewModel(java.util.Map<String, Object> resourceListViewModel) {
        this.resourceListViewModel = resourceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}