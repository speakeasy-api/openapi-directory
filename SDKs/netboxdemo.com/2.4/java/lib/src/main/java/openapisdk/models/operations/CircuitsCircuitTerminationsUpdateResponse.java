package openapisdk.models.operations;



public class CircuitsCircuitTerminationsUpdateResponse {
    public openapisdk.models.shared.CircuitTermination circuitTermination;
    public CircuitsCircuitTerminationsUpdateResponse withCircuitTermination(openapisdk.models.shared.CircuitTermination circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTerminationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTerminationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}