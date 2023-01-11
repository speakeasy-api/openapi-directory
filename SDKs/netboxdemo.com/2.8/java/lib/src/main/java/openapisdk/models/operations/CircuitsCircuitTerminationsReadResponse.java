package openapisdk.models.operations;



public class CircuitsCircuitTerminationsReadResponse {
    public openapisdk.models.shared.CircuitTermination circuitTermination;
    public CircuitsCircuitTerminationsReadResponse withCircuitTermination(openapisdk.models.shared.CircuitTermination circuitTermination) {
        this.circuitTermination = circuitTermination;
        return this;
    }
    public String contentType;
    public CircuitsCircuitTerminationsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitTerminationsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}