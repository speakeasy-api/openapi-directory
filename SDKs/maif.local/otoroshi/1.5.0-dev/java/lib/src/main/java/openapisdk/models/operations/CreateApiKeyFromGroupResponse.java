package openapisdk.models.operations;



public class CreateApiKeyFromGroupResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public CreateApiKeyFromGroupResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public CreateApiKeyFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApiKeyFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}