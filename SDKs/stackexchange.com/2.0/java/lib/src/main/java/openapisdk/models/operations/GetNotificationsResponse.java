package openapisdk.models.operations;



public class GetNotificationsResponse {
    public byte[] body;
    public GetNotificationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}