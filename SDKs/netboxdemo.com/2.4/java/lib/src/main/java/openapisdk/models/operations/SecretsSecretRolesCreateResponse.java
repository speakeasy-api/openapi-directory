package openapisdk.models.operations;



public class SecretsSecretRolesCreateResponse {
    public String contentType;
    public SecretsSecretRolesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretRole secretRole;
    public SecretsSecretRolesCreateResponse withSecretRole(openapisdk.models.shared.SecretRole secretRole) {
        this.secretRole = secretRole;
        return this;
    }
    public Long statusCode;
    public SecretsSecretRolesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}