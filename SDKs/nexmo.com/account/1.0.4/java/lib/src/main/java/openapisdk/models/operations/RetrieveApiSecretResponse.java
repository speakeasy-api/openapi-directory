package openapisdk.models.operations;



public class RetrieveApiSecretResponse {
    public String contentType;
    public RetrieveApiSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveApiSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object retrieveAPISecret401ApplicationJSONAny;
    public RetrieveApiSecretResponse withRetrieveApiSecret401ApplicationJsonAny(Object retrieveAPISecret401ApplicationJSONAny) {
        this.retrieveAPISecret401ApplicationJSONAny = retrieveAPISecret401ApplicationJSONAny;
        return this;
    }
    public Object retrieveAPISecret404ApplicationJSONOneOf;
    public RetrieveApiSecretResponse withRetrieveApiSecret404ApplicationJsonOneOf(Object retrieveAPISecret404ApplicationJSONOneOf) {
        this.retrieveAPISecret404ApplicationJSONOneOf = retrieveAPISecret404ApplicationJSONOneOf;
        return this;
    }
    public openapisdk.models.shared.SecretInfo secretInfo;
    public RetrieveApiSecretResponse withSecretInfo(openapisdk.models.shared.SecretInfo secretInfo) {
        this.secretInfo = secretInfo;
        return this;
    }
}