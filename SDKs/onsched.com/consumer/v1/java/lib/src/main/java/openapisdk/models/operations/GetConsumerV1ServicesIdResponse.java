package openapisdk.models.operations;



public class GetConsumerV1ServicesIdResponse {
    public String contentType;
    public GetConsumerV1ServicesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public GetConsumerV1ServicesIdResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ServicesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}