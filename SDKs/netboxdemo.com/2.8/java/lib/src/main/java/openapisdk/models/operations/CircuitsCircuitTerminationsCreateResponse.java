package openapisdk.models.operations;



public class CircuitsCircuitTerminationsCreateResponse {
    public openapisdk.models.shared.CircuitTermination circuitTermination;
    public CircuitsCircuitTerminationsCreateResponse withCircuitTermination(openapisdk.models.shared.CircuitTermination circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTerminationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTerminationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}