package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsListResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSecretVersionsResponse listSecretVersionsResponse;
    public SecretmanagerProjectsSecretsVersionsListResponse withListSecretVersionsResponse(openapisdk.models.shared.ListSecretVersionsResponse listSecretVersionsResponse) {
        this.listSecretVersionsResponse = listSecretVersionsResponse;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}