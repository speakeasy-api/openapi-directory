package openapisdk.models.operations;



public class NodesReadResponse {
    public byte[] body;
    public NodesReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}