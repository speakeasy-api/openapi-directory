package openapisdk.models.operations;



public class GetResponse {
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> get200ApplicationJSONObject;
    public GetResponse withGet200ApplicationJsonObject(java.util.Map<String, Object> get200ApplicationJSONObject) {
        this.get200ApplicationJSONObject = get200ApplicationJSONObject;
        return this;
    }
}