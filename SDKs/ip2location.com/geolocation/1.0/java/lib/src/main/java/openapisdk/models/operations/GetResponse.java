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
    public String get200ApplicationJSONString;
    public GetResponse withGet200ApplicationJsonString(String get200ApplicationJSONString) {
        this.get200ApplicationJSONString = get200ApplicationJSONString;
        return this;
    }
}