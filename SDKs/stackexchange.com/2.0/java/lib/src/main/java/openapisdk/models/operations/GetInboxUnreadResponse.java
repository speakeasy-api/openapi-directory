package openapisdk.models.operations;



public class GetInboxUnreadResponse {
    public byte[] body;
    public GetInboxUnreadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInboxUnreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInboxUnreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}