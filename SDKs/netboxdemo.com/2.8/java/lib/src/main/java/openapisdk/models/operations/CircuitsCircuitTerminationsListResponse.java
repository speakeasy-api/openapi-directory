package openapisdk.models.operations;



public class CircuitsCircuitTerminationsListResponse {
    public String contentType;
    public CircuitsCircuitTerminationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTerminationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CircuitsCircuitTerminationsList200ApplicationJson circuitsCircuitTerminationsList200ApplicationJSONObject;
    public CircuitsCircuitTerminationsListResponse withCircuitsCircuitTerminationsList200ApplicationJsonObject(CircuitsCircuitTerminationsList200ApplicationJson circuitsCircuitTerminationsList200ApplicationJSONObject) {
        this.circuitsCircuitTerminationsList200ApplicationJSONObject = circuitsCircuitTerminationsList200ApplicationJSONObject;
        return this;
    }
}