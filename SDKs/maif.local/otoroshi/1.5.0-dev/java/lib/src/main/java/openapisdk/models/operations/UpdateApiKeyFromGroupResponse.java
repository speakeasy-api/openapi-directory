package openapisdk.models.operations;



public class UpdateApiKeyFromGroupResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public UpdateApiKeyFromGroupResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public UpdateApiKeyFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateApiKeyFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}