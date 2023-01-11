package openapisdk.models.operations;



public class AuthorizeResponse {
    public byte[] body;
    public AuthorizeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AuthorizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthorizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}