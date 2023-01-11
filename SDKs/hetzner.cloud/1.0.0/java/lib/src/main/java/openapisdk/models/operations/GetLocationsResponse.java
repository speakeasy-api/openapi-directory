package openapisdk.models.operations;



public class GetLocationsResponse {
    public String contentType;
    public GetLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLocations200ApplicationJson getLocations200ApplicationJSONObject;
    public GetLocationsResponse withGetLocations200ApplicationJsonObject(GetLocations200ApplicationJson getLocations200ApplicationJSONObject) {
        this.getLocations200ApplicationJSONObject = getLocations200ApplicationJSONObject;
        return this;
    }
}