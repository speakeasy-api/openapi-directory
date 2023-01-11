package openapisdk.models.operations;



public class GetReviewsResponse {
    public byte[] body;
    public GetReviewsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}