package openapisdk.models.operations;



public class MirrorTimelinePatchResponse {
    public byte[] body;
    public MirrorTimelinePatchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelinePatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelinePatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}