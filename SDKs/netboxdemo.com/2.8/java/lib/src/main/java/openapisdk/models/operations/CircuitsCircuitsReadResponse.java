package openapisdk.models.operations;



public class CircuitsCircuitsReadResponse {
    public openapisdk.models.shared.Circuit circuit;
    public CircuitsCircuitsReadResponse withCircuit(openapisdk.models.shared.Circuit circuit) {
        this.circuit = circuit;
        return this;
    }
    public String contentType;
    public CircuitsCircuitsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}