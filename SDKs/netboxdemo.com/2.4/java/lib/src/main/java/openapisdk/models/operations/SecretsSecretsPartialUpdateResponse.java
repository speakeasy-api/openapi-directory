package openapisdk.models.operations;



public class SecretsSecretsPartialUpdateResponse {
    public String contentType;
    public SecretsSecretsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Secret secret;
    public SecretsSecretsPartialUpdateResponse withSecret(openapisdk.models.shared.Secret secret) {
        this.secret = secret;
        return this;
    }
    public Long statusCode;
    public SecretsSecretsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}