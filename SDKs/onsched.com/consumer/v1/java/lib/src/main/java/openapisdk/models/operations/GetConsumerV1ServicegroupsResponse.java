package openapisdk.models.operations;



public class GetConsumerV1ServicegroupsResponse {
    public String contentType;
    public GetConsumerV1ServicegroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceGroupListViewModel;
    public GetConsumerV1ServicegroupsResponse withServiceGroupListViewModel(java.util.Map<String, Object> serviceGroupListViewModel) {
        this.serviceGroupListViewModel = serviceGroupListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicegroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}