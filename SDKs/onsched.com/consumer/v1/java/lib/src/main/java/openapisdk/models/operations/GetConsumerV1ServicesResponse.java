package openapisdk.models.operations;



public class GetConsumerV1ServicesResponse {
    public String contentType;
    public GetConsumerV1ServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceListViewModel;
    public GetConsumerV1ServicesResponse withServiceListViewModel(java.util.Map<String, Object> serviceListViewModel) {
        this.serviceListViewModel = serviceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}