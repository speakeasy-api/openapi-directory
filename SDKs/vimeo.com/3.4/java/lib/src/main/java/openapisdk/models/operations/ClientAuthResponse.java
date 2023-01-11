package openapisdk.models.operations;



public class ClientAuthResponse {
    public String contentType;
    public ClientAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClientAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Auth auth;
    public ClientAuthResponse withAuth(openapisdk.models.shared.Auth auth) {
        this.auth = auth;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ClientAuthResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}