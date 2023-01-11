package openapisdk.models.operations;



public class NodesFilesListResponse {
    public byte[] body;
    public NodesFilesListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}