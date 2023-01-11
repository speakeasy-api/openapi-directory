package openapisdk.models.operations;



public class NodesFilesReadResponse {
    public byte[] body;
    public NodesFilesReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesFilesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesFilesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}