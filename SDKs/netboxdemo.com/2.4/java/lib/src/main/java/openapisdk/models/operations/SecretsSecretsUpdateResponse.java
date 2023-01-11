package openapisdk.models.operations;



public class SecretsSecretsUpdateResponse {
    public String contentType;
    public SecretsSecretsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Secret secret;
    public SecretsSecretsUpdateResponse withSecret(openapisdk.models.shared.Secret secret) {
        this.secret = secret;
        return this;
    }
    public Long statusCode;
    public SecretsSecretsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}