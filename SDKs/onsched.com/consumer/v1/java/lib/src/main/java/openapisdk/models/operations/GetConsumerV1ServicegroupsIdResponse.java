package openapisdk.models.operations;



public class GetConsumerV1ServicegroupsIdResponse {
    public String contentType;
    public GetConsumerV1ServicegroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceGroupViewModel serviceGroupViewModel;
    public GetConsumerV1ServicegroupsIdResponse withServiceGroupViewModel(openapisdk.models.shared.ServiceGroupViewModel serviceGroupViewModel) {
        this.serviceGroupViewModel = serviceGroupViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicegroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}