package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsAccessResponse {
    public openapisdk.models.shared.AccessSecretVersionResponse accessSecretVersionResponse;
    public SecretmanagerProjectsSecretsVersionsAccessResponse withAccessSecretVersionResponse(openapisdk.models.shared.AccessSecretVersionResponse accessSecretVersionResponse) {
        this.accessSecretVersionResponse = accessSecretVersionResponse;
        return this;
    }
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}