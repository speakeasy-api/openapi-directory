package openapisdk.models.operations;



public class GetSpotsResponse {
    public String contentType;
    public GetSpotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSpotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSpots200ApplicationJson getSpots200ApplicationJSONObject;
    public GetSpotsResponse withGetSpots200ApplicationJsonObject(GetSpots200ApplicationJson getSpots200ApplicationJSONObject) {
        this.getSpots200ApplicationJSONObject = getSpots200ApplicationJSONObject;
        return this;
    }
}