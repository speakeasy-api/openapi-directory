package openapisdk.models.operations;



public class CircuitsCircuitsPartialUpdateResponse {
    public openapisdk.models.shared.Circuit circuit;
    public CircuitsCircuitsPartialUpdateResponse withCircuit(openapisdk.models.shared.Circuit circuit) {
        this.circuit = circuit;
        return this;
    }
    public String contentType;
    public CircuitsCircuitsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CircuitsCircuitsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}