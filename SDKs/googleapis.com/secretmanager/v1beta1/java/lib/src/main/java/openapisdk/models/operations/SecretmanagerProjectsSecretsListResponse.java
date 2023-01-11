package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsListResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSecretsResponse listSecretsResponse;
    public SecretmanagerProjectsSecretsListResponse withListSecretsResponse(openapisdk.models.shared.ListSecretsResponse listSecretsResponse) {
        this.listSecretsResponse = listSecretsResponse;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}