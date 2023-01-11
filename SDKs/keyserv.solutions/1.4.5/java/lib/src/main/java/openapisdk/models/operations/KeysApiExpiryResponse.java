package openapisdk.models.operations;



public class KeysApiExpiryResponse {
    public String contentType;
    public KeysApiExpiryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object keysApiExpiry200ApplicationJSONOneOf;
    public KeysApiExpiryResponse withKeysApiExpiry200ApplicationJsonOneOf(Object keysApiExpiry200ApplicationJSONOneOf) {
        this.keysApiExpiry200ApplicationJSONOneOf = keysApiExpiry200ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public KeysApiExpiryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}