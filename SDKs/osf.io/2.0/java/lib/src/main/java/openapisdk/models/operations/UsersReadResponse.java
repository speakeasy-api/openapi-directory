package openapisdk.models.operations;



public class UsersReadResponse {
    public byte[] body;
    public UsersReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UsersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}