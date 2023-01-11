package openapisdk.models.operations;



public class WikiReadResponse {
    public byte[] body;
    public WikiReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WikiReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WikiReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}