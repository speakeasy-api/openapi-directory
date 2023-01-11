package openapisdk.models.operations;



public class MirrorSubscriptionsUpdateResponse {
    public byte[] body;
    public MirrorSubscriptionsUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorSubscriptionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorSubscriptionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}