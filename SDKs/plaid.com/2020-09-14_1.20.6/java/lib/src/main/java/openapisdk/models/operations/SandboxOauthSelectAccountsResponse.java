package openapisdk.models.operations;



public class SandboxOauthSelectAccountsResponse {
    public String contentType;
    public SandboxOauthSelectAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxOauthSelectAccountsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sandboxOauthSelectAccountsResponse;
    public SandboxOauthSelectAccountsResponse withSandboxOauthSelectAccountsResponse(java.util.Map<String, Object> sandboxOauthSelectAccountsResponse) {
        this.sandboxOauthSelectAccountsResponse = sandboxOauthSelectAccountsResponse;
        return this;
    }
    public Long statusCode;
    public SandboxOauthSelectAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}