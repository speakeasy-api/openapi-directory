package openapisdk.models.operations;



public class RetrieveApiSecretsResponse {
    public String contentType;
    public RetrieveApiSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorApiKeyNotFound errorAPIKeyNotFound;
    public RetrieveApiSecretsResponse withErrorApiKeyNotFound(openapisdk.models.shared.ErrorApiKeyNotFound errorAPIKeyNotFound) {
        this.errorAPIKeyNotFound = errorAPIKeyNotFound;
        return this;
    }
    public Long statusCode;
    public RetrieveApiSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object retrieveAPISecrets200ApplicationJSONAny;
    public RetrieveApiSecretsResponse withRetrieveApiSecrets200ApplicationJsonAny(Object retrieveAPISecrets200ApplicationJSONAny) {
        this.retrieveAPISecrets200ApplicationJSONAny = retrieveAPISecrets200ApplicationJSONAny;
        return this;
    }
    public Object retrieveAPISecrets401ApplicationJSONAny;
    public RetrieveApiSecretsResponse withRetrieveApiSecrets401ApplicationJsonAny(Object retrieveAPISecrets401ApplicationJSONAny) {
        this.retrieveAPISecrets401ApplicationJSONAny = retrieveAPISecrets401ApplicationJSONAny;
        return this;
    }
}