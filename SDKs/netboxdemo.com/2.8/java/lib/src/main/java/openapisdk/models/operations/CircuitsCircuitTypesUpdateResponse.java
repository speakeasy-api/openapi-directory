package openapisdk.models.operations;



public class CircuitsCircuitTypesUpdateResponse {
    public openapisdk.models.shared.CircuitType circuitType;
    public CircuitsCircuitTypesUpdateResponse withCircuitType(openapisdk.models.shared.CircuitType circuitType) {
        this.circuitType = circuitType;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTypesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTypesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}