package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsEnableResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsEnableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretVersion secretVersion;
    public SecretmanagerProjectsSecretsVersionsEnableResponse withSecretVersion(openapisdk.models.shared.SecretVersion secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsEnableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}