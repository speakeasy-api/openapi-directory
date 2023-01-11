package openapisdk.models.operations;



public class SecretsSecretRolesUpdateResponse {
    public String contentType;
    public SecretsSecretRolesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretRole secretRole;
    public SecretsSecretRolesUpdateResponse withSecretRole(openapisdk.models.shared.SecretRole secretRole) {
        this.secretRole = secretRole;
        return this;
    }
    public Long statusCode;
    public SecretsSecretRolesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}