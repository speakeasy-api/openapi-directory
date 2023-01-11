package openapisdk.models.operations;



public class RotateAccountKeyResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public RotateAccountKeyResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public RotateAccountKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RotateAccountKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}