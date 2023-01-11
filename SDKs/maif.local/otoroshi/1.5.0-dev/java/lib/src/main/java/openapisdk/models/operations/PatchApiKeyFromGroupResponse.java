package openapisdk.models.operations;



public class PatchApiKeyFromGroupResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public PatchApiKeyFromGroupResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public PatchApiKeyFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchApiKeyFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}