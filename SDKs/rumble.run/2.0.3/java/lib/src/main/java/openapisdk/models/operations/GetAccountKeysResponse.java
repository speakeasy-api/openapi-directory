package openapisdk.models.operations;



public class GetAccountKeysResponse {
    public openapisdk.models.shared.ApiKey[] apiKeys;
    public GetAccountKeysResponse withApiKeys(openapisdk.models.shared.ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    public String contentType;
    public GetAccountKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}