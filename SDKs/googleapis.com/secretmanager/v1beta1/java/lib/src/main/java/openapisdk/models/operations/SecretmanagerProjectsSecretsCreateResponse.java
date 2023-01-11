package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsCreateResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Secret secret;
    public SecretmanagerProjectsSecretsCreateResponse withSecret(openapisdk.models.shared.Secret secret) {
        this.secret = secret;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}