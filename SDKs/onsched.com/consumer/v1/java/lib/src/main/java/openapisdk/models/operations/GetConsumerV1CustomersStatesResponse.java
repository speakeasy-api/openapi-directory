package openapisdk.models.operations;



public class GetConsumerV1CustomersStatesResponse {
    public String contentType;
    public GetConsumerV1CustomersStatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StateViewModel[] stateViewModels;
    public GetConsumerV1CustomersStatesResponse withStateViewModels(openapisdk.models.shared.StateViewModel[] stateViewModels) {
        this.stateViewModels = stateViewModels;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersStatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}