package openapisdk.models.operations;



public class AllApiKeysResponse {
    public openapisdk.models.shared.ApiKey[] apiKeys;
    public AllApiKeysResponse withApiKeys(openapisdk.models.shared.ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    public String contentType;
    public AllApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}