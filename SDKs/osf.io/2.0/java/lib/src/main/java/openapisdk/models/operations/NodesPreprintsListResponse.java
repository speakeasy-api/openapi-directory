package openapisdk.models.operations;



public class NodesPreprintsListResponse {
    public byte[] body;
    public NodesPreprintsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesPreprintsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesPreprintsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}