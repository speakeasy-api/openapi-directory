package openapisdk.models.operations;



public class NodesLogsListResponse {
    public byte[] body;
    public NodesLogsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesLogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesLogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}