package openapisdk.models.operations;



public class MirrorSubscriptionsListResponse {
    public byte[] body;
    public MirrorSubscriptionsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorSubscriptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorSubscriptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}