package openapisdk.models.operations;



public class ApiKeysFromGroupResponse {
    public openapisdk.models.shared.ApiKey[] apiKeys;
    public ApiKeysFromGroupResponse withApiKeys(openapisdk.models.shared.ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    public String contentType;
    public ApiKeysFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiKeysFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}