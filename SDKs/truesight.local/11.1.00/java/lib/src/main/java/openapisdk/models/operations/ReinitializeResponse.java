package openapisdk.models.operations;



public class ReinitializeResponse {
    public byte[] body;
    public ReinitializeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReinitializeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReinitializeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}