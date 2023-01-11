package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsAddVersionResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsAddVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretVersion secretVersion;
    public SecretmanagerProjectsSecretsAddVersionResponse withSecretVersion(openapisdk.models.shared.SecretVersion secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsAddVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}