package openapisdk.models.operations;



public class GetcompanymatchResponse {
    public String contentType;
    public GetcompanymatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetcompanymatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getcompanymatch200ApplicationJson getcompanymatch200ApplicationJSONObject;
    public GetcompanymatchResponse withGetcompanymatch200ApplicationJsonObject(Getcompanymatch200ApplicationJson getcompanymatch200ApplicationJSONObject) {
        this.getcompanymatch200ApplicationJSONObject = getcompanymatch200ApplicationJSONObject;
        return this;
    }
}