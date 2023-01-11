package openapisdk.models.operations;



public class ApiKeysResponse {
    public openapisdk.models.shared.ApiKey[] apiKeys;
    public ApiKeysResponse withApiKeys(openapisdk.models.shared.ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    public String contentType;
    public ApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}