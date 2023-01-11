package openapisdk.models.operations;



public class EmulationOutputResponse {
    public byte[] body;
    public EmulationOutputResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public EmulationOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EmulationOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}