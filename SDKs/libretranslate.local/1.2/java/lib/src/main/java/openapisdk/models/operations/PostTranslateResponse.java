package openapisdk.models.operations;



public class PostTranslateResponse {
    public byte[] body;
    public PostTranslateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTranslateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTranslateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}