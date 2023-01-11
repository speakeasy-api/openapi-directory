package openapisdk.models.operations;



public class CorridorResponse {
    public String contentType;
    public CorridorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CorridorOut corridorOut;
    public CorridorResponse withCorridorOut(openapisdk.models.shared.CorridorOut corridorOut) {
        this.corridorOut = corridorOut;
        return this;
    }
    public Long statusCode;
    public CorridorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}