package openapisdk.models.operations;



public class GetConsumerV1ResourcesIdServicesResponse {
    public String contentType;
    public GetConsumerV1ResourcesIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceServiceListViewModel;
    public GetConsumerV1ResourcesIdServicesResponse withResourceServiceListViewModel(java.util.Map<String, Object> resourceServiceListViewModel) {
        this.resourceServiceListViewModel = resourceServiceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ResourcesIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}