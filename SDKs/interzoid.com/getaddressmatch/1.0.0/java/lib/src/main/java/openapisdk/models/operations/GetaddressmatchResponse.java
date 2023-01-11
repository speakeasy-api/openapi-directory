package openapisdk.models.operations;



public class GetaddressmatchResponse {
    public String contentType;
    public GetaddressmatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetaddressmatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getaddressmatch200ApplicationJson getaddressmatch200ApplicationJSONObject;
    public GetaddressmatchResponse withGetaddressmatch200ApplicationJsonObject(Getaddressmatch200ApplicationJson getaddressmatch200ApplicationJSONObject) {
        this.getaddressmatch200ApplicationJSONObject = getaddressmatch200ApplicationJSONObject;
        return this;
    }
}