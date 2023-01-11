package openapisdk.models.operations;



public class GetKeysResponse {
    public String contentType;
    public GetKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetKeys200ApplicationJson getKeys200ApplicationJSONObject;
    public GetKeysResponse withGetKeys200ApplicationJsonObject(GetKeys200ApplicationJson getKeys200ApplicationJSONObject) {
        this.getKeys200ApplicationJSONObject = getKeys200ApplicationJSONObject;
        return this;
    }
}