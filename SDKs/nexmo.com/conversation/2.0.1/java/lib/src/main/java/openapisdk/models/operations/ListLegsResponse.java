package openapisdk.models.operations;



public class ListLegsResponse {
    public String contentType;
    public ListLegsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListLegsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListLegs200ApplicationJson listLegs200ApplicationJSONObject;
    public ListLegsResponse withListLegs200ApplicationJsonObject(ListLegs200ApplicationJson listLegs200ApplicationJSONObject) {
        this.listLegs200ApplicationJSONObject = listLegs200ApplicationJSONObject;
        return this;
    }
}