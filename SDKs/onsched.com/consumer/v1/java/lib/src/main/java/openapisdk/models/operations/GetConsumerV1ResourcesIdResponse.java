package openapisdk.models.operations;



public class GetConsumerV1ResourcesIdResponse {
    public String contentType;
    public GetConsumerV1ResourcesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public GetConsumerV1ResourcesIdResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1ResourcesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}