package openapisdk.models.operations;



public class NodesAddonReadResponse {
    public byte[] body;
    public NodesAddonReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesAddonReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesAddonReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}