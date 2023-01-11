package openapisdk.models.operations;



public class PatchApiKeyResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public PatchApiKeyResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public PatchApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}