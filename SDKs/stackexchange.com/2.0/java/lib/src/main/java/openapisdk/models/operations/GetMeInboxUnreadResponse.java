package openapisdk.models.operations;



public class GetMeInboxUnreadResponse {
    public byte[] body;
    public GetMeInboxUnreadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeInboxUnreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeInboxUnreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}