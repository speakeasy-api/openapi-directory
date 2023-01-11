package openapisdk.models.operations;



public class MirrorTimelineGetResponse {
    public byte[] body;
    public MirrorTimelineGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}