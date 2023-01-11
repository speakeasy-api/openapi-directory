package openapisdk.models.operations;



public class GetPostsResponse {
    public byte[] body;
    public GetPostsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}