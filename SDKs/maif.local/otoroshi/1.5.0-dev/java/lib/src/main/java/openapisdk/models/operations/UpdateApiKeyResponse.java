package openapisdk.models.operations;



public class UpdateApiKeyResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public UpdateApiKeyResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public UpdateApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}