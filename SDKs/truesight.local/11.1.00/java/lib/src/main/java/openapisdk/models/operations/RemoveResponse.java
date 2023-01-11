package openapisdk.models.operations;



public class RemoveResponse {
    public byte[] body;
    public RemoveResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}