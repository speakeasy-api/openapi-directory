package openapisdk.models.operations;



public class GetKvPairsByIdResponse {
    public String contentType;
    public GetKvPairsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.KeyValuePair keyValuePair;
    public GetKvPairsByIdResponse withKeyValuePair(openapisdk.models.shared.KeyValuePair keyValuePair) {
        this.keyValuePair = keyValuePair;
        return this;
    }
    public Long statusCode;
    public GetKvPairsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}