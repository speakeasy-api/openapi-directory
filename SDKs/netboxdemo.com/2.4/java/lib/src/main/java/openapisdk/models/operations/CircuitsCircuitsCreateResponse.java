package openapisdk.models.operations;



public class CircuitsCircuitsCreateResponse {
    public openapisdk.models.shared.Circuit circuit;
    public CircuitsCircuitsCreateResponse withCircuit(openapisdk.models.shared.Circuit circuit) {
        this.circuit = circuit;
        return this;
    }
    public String contentType;
    public CircuitsCircuitsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}