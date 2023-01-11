package openapisdk.models.operations;



public class SecretsSecretsCreateResponse {
    public String contentType;
    public SecretsSecretsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Secret secret;
    public SecretsSecretsCreateResponse withSecret(openapisdk.models.shared.Secret secret) {
        this.secret = secret;
        return this;
    }
    public Long statusCode;
    public SecretsSecretsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}