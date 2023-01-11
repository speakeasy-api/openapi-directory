package openapisdk.models.operations;



public class GetMeNotificationsUnreadResponse {
    public byte[] body;
    public GetMeNotificationsUnreadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeNotificationsUnreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeNotificationsUnreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}