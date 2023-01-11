package openapisdk.models.operations;



public class CircuitsCircuitTypesReadResponse {
    public openapisdk.models.shared.CircuitType circuitType;
    public CircuitsCircuitTypesReadResponse withCircuitType(openapisdk.models.shared.CircuitType circuitType) {
        this.circuitType = circuitType;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTypesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTypesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}