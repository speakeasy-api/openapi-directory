package openapisdk.models.operations;



public class MirrorTimelineUpdateResponse {
    public byte[] body;
    public MirrorTimelineUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}