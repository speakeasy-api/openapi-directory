package openapisdk.models.operations;



public class SecretsSecretsListResponse {
    public String contentType;
    public SecretsSecretsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretsSecretsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SecretsSecretsList200ApplicationJson secretsSecretsList200ApplicationJSONObject;
    public SecretsSecretsListResponse withSecretsSecretsList200ApplicationJsonObject(SecretsSecretsList200ApplicationJson secretsSecretsList200ApplicationJSONObject) {
        this.secretsSecretsList200ApplicationJSONObject = secretsSecretsList200ApplicationJSONObject;
        return this;
    }
}