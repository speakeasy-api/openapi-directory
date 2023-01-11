package openapisdk.models.operations;



public class AddClientSecretResponse {
    public String contentType;
    public AddClientSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddClientSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ClientCredentialsResponse[] clientCredentialsResponses;
    public AddClientSecretResponse withClientCredentialsResponses(openapisdk.models.shared.ClientCredentialsResponse[] clientCredentialsResponses) {
        this.clientCredentialsResponses = clientCredentialsResponses;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddClientSecretResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}