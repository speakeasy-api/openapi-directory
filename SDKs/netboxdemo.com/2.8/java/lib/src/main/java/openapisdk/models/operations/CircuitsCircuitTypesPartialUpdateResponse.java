package openapisdk.models.operations;



public class CircuitsCircuitTypesPartialUpdateResponse {
    public openapisdk.models.shared.CircuitType circuitType;
    public CircuitsCircuitTypesPartialUpdateResponse withCircuitType(openapisdk.models.shared.CircuitType circuitType) {
        this.circuitType = circuitType;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTypesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTypesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}