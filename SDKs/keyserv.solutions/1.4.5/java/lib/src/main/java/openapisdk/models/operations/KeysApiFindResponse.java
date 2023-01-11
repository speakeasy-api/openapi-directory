package openapisdk.models.operations;



public class KeysApiFindResponse {
    public String contentType;
    public KeysApiFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object keysApiFind200ApplicationJSONOneOf;
    public KeysApiFindResponse withKeysApiFind200ApplicationJsonOneOf(Object keysApiFind200ApplicationJSONOneOf) {
        this.keysApiFind200ApplicationJSONOneOf = keysApiFind200ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public KeysApiFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}