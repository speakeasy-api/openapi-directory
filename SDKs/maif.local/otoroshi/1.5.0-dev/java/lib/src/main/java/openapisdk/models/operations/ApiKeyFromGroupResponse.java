package openapisdk.models.operations;



public class ApiKeyFromGroupResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public ApiKeyFromGroupResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public ApiKeyFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiKeyFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}