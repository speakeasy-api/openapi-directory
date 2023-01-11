package openapisdk.models.operations;



public class PatchEventResponse {
    public byte[] body;
    public PatchEventResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}