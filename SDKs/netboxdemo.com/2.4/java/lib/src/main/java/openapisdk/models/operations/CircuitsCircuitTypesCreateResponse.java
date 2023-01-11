package openapisdk.models.operations;



public class CircuitsCircuitTypesCreateResponse {
    public openapisdk.models.shared.CircuitType circuitType;
    public CircuitsCircuitTypesCreateResponse withCircuitType(openapisdk.models.shared.CircuitType circuitType) {
        this.circuitType = circuitType;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTypesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTypesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}