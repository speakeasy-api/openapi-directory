package openapisdk.models.operations;



public class GetLocationsIdResponse {
    public String contentType;
    public GetLocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLocationsId200ApplicationJson getLocationsId200ApplicationJSONObject;
    public GetLocationsIdResponse withGetLocationsId200ApplicationJsonObject(GetLocationsId200ApplicationJson getLocationsId200ApplicationJSONObject) {
        this.getLocationsId200ApplicationJSONObject = getLocationsId200ApplicationJSONObject;
        return this;
    }
}