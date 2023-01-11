package openapisdk.models.operations;



public class RevokeApiSecretResponse {
    public String contentType;
    public RevokeApiSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RevokeApiSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object revokeAPISecret401ApplicationJSONAny;
    public RevokeApiSecretResponse withRevokeApiSecret401ApplicationJsonAny(Object revokeAPISecret401ApplicationJSONAny) {
        this.revokeAPISecret401ApplicationJSONAny = revokeAPISecret401ApplicationJSONAny;
        return this;
    }
    public Object revokeAPISecret403ApplicationJSONAny;
    public RevokeApiSecretResponse withRevokeApiSecret403ApplicationJsonAny(Object revokeAPISecret403ApplicationJSONAny) {
        this.revokeAPISecret403ApplicationJSONAny = revokeAPISecret403ApplicationJSONAny;
        return this;
    }
    public Object revokeAPISecret404ApplicationJSONOneOf;
    public RevokeApiSecretResponse withRevokeApiSecret404ApplicationJsonOneOf(Object revokeAPISecret404ApplicationJSONOneOf) {
        this.revokeAPISecret404ApplicationJSONOneOf = revokeAPISecret404ApplicationJSONOneOf;
        return this;
    }
}