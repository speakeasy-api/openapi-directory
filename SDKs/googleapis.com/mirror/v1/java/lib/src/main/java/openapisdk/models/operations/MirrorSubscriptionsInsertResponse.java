package openapisdk.models.operations;



public class MirrorSubscriptionsInsertResponse {
    public byte[] body;
    public MirrorSubscriptionsInsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorSubscriptionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorSubscriptionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}