package openapisdk.models.operations;



public class CircuitsCircuitTypesListResponse {
    public String contentType;
    public CircuitsCircuitTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CircuitsCircuitTypesList200ApplicationJson circuitsCircuitTypesList200ApplicationJSONObject;
    public CircuitsCircuitTypesListResponse withCircuitsCircuitTypesList200ApplicationJsonObject(CircuitsCircuitTypesList200ApplicationJson circuitsCircuitTypesList200ApplicationJSONObject) {
        this.circuitsCircuitTypesList200ApplicationJSONObject = circuitsCircuitTypesList200ApplicationJSONObject;
        return this;
    }
}