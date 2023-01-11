package openapisdk.models.operations;



public class CreateApiSecretResponse {
    public String contentType;
    public CreateApiSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorApiKeyNotFound errorAPIKeyNotFound;
    public CreateApiSecretResponse withErrorApiKeyNotFound(openapisdk.models.shared.ErrorApiKeyNotFound errorAPIKeyNotFound) {
        this.errorAPIKeyNotFound = errorAPIKeyNotFound;
        return this;
    }
    public Long statusCode;
    public CreateApiSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createAPISecret400ApplicationJSONAny;
    public CreateApiSecretResponse withCreateApiSecret400ApplicationJsonAny(Object createAPISecret400ApplicationJSONAny) {
        this.createAPISecret400ApplicationJSONAny = createAPISecret400ApplicationJSONAny;
        return this;
    }
    public Object createAPISecret401ApplicationJSONAny;
    public CreateApiSecretResponse withCreateApiSecret401ApplicationJsonAny(Object createAPISecret401ApplicationJSONAny) {
        this.createAPISecret401ApplicationJSONAny = createAPISecret401ApplicationJSONAny;
        return this;
    }
    public openapisdk.models.shared.SecretInfo secretInfo;
    public CreateApiSecretResponse withSecretInfo(openapisdk.models.shared.SecretInfo secretInfo) {
        this.secretInfo = secretInfo;
        return this;
    }
}