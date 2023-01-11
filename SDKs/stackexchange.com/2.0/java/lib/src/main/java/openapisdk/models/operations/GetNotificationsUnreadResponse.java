package openapisdk.models.operations;



public class GetNotificationsUnreadResponse {
    public byte[] body;
    public GetNotificationsUnreadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetNotificationsUnreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNotificationsUnreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}