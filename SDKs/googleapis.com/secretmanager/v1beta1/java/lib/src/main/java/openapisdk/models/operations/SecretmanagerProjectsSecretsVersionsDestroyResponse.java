package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsDestroyResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsDestroyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretVersion secretVersion;
    public SecretmanagerProjectsSecretsVersionsDestroyResponse withSecretVersion(openapisdk.models.shared.SecretVersion secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsDestroyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}