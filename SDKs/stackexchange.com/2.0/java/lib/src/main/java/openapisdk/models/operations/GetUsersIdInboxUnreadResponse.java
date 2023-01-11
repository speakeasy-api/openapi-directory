package openapisdk.models.operations;



public class GetUsersIdInboxUnreadResponse {
    public byte[] body;
    public GetUsersIdInboxUnreadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUsersIdInboxUnreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersIdInboxUnreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}