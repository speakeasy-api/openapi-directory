package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsGetResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretVersion secretVersion;
    public SecretmanagerProjectsSecretsVersionsGetResponse withSecretVersion(openapisdk.models.shared.SecretVersion secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}