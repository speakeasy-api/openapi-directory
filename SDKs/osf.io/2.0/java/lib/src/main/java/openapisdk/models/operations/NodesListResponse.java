package openapisdk.models.operations;



public class NodesListResponse {
    public byte[] body;
    public NodesListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}