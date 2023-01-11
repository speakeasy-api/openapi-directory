package openapisdk.models.operations;



public class GetglobaltimeResponse {
    public String contentType;
    public GetglobaltimeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetglobaltimeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getglobaltime200ApplicationJson getglobaltime200ApplicationJSONObject;
    public GetglobaltimeResponse withGetglobaltime200ApplicationJsonObject(Getglobaltime200ApplicationJson getglobaltime200ApplicationJSONObject) {
        this.getglobaltime200ApplicationJSONObject = getglobaltime200ApplicationJSONObject;
        return this;
    }
}