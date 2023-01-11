package openapisdk.models.operations;



public class SecretsSecretRolesListResponse {
    public String contentType;
    public SecretsSecretRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretsSecretRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SecretsSecretRolesList200ApplicationJson secretsSecretRolesList200ApplicationJSONObject;
    public SecretsSecretRolesListResponse withSecretsSecretRolesList200ApplicationJsonObject(SecretsSecretRolesList200ApplicationJson secretsSecretRolesList200ApplicationJSONObject) {
        this.secretsSecretRolesList200ApplicationJSONObject = secretsSecretRolesList200ApplicationJSONObject;
        return this;
    }
}