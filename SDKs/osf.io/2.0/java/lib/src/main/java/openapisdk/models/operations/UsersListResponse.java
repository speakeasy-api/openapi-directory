package openapisdk.models.operations;



public class UsersListResponse {
    public byte[] body;
    public UsersListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}