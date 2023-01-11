package openapisdk.models.operations;



public class PostLanguagesResponse {
    public byte[] body;
    public PostLanguagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}