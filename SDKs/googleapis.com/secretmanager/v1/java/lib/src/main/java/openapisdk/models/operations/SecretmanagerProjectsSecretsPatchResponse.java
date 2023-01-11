package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsPatchResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Secret secret;
    public SecretmanagerProjectsSecretsPatchResponse withSecret(openapisdk.models.shared.Secret secret) {
        this.secret = secret;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}