package openapisdk.models.operations;



public class GetCommentsResponse {
    public byte[] body;
    public GetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}