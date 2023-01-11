package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsDisableResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsDisableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretVersion secretVersion;
    public SecretmanagerProjectsSecretsVersionsDisableResponse withSecretVersion(openapisdk.models.shared.SecretVersion secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsDisableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}