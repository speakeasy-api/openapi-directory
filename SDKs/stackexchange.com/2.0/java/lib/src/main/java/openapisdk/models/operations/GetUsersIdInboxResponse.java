package openapisdk.models.operations;



public class GetUsersIdInboxResponse {
    public byte[] body;
    public GetUsersIdInboxResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUsersIdInboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersIdInboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}