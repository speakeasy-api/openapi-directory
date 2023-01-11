package openapisdk.models.operations;



public class GetSimilarResponse {
    public byte[] body;
    public GetSimilarResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSimilarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSimilarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}