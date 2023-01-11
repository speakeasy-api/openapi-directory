package openapisdk.models.operations;



public class NodesCitationReadResponse {
    public byte[] body;
    public NodesCitationReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesCitationReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesCitationReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}