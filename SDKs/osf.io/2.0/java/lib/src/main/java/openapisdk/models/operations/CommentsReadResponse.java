package openapisdk.models.operations;



public class CommentsReadResponse {
    public byte[] body;
    public CommentsReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CommentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CommentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}