package openapisdk.models.operations;



public class SecretsSecretRolesPartialUpdateResponse {
    public String contentType;
    public SecretsSecretRolesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SecretRole secretRole;
    public SecretsSecretRolesPartialUpdateResponse withSecretRole(openapisdk.models.shared.SecretRole secretRole) {
        this.secretRole = secretRole;
        return this;
    }
    public Long statusCode;
    public SecretsSecretRolesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}