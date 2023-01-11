package openapisdk.models.operations;



public class CircuitsCircuitsUpdateResponse {
    public openapisdk.models.shared.Circuit circuit;
    public CircuitsCircuitsUpdateResponse withCircuit(openapisdk.models.shared.Circuit circuit) {
        this.circuit = circuit;
        return this;
    }
    public String contentType;
    public CircuitsCircuitsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}