package openapisdk.models.operations;



public class TripsTripDetailsResponse {
    public String contentType;
    public TripsTripDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TripsTripDetailsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TripsTripDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TripsTripDetails200ApplicationJson tripsTripDetails200ApplicationJSONObject;
    public TripsTripDetailsResponse withTripsTripDetails200ApplicationJsonObject(TripsTripDetails200ApplicationJson tripsTripDetails200ApplicationJSONObject) {
        this.tripsTripDetails200ApplicationJSONObject = tripsTripDetails200ApplicationJSONObject;
        return this;
    }
}