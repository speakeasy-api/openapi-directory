package openapisdk.models.operations;



public class CircuitsCircuitsListResponse {
    public String contentType;
    public CircuitsCircuitsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CircuitsCircuitsList200ApplicationJson circuitsCircuitsList200ApplicationJSONObject;
    public CircuitsCircuitsListResponse withCircuitsCircuitsList200ApplicationJsonObject(CircuitsCircuitsList200ApplicationJson circuitsCircuitsList200ApplicationJSONObject) {
        this.circuitsCircuitsList200ApplicationJSONObject = circuitsCircuitsList200ApplicationJSONObject;
        return this;
    }
}