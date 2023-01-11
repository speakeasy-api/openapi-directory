package openapisdk.models.operations;



public class CircuitsCircuitTerminationsPartialUpdateResponse {
    public openapisdk.models.shared.CircuitTermination circuitTermination;
    public CircuitsCircuitTerminationsPartialUpdateResponse withCircuitTermination(openapisdk.models.shared.CircuitTermination circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTerminationsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTerminationsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}