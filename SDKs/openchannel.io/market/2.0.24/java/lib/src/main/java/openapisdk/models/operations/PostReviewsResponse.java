package openapisdk.models.operations;



public class PostReviewsResponse {
    public byte[] body;
    public PostReviewsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}