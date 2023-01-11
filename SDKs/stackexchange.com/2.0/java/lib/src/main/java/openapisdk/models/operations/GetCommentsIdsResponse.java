package openapisdk.models.operations;



public class GetCommentsIdsResponse {
    public byte[] body;
    public GetCommentsIdsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCommentsIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentsIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}