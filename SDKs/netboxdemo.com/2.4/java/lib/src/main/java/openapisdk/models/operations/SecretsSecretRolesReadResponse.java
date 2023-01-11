package openapisdk.models.operations;



public class SecretsSecretRolesReadResponse {
    public String contentType;
    public SecretsSecretRolesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretRole secretRole;
    public SecretsSecretRolesReadResponse withSecretRole(openapisdk.models.shared.SecretRole secretRole) {
        this.secretRole = secretRole;
        return this;
    }
    public Long statusCode;
    public SecretsSecretRolesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}