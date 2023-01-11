package openapisdk.models.operations;



public class MirrorTimelineInsertResponse {
    public byte[] body;
    public MirrorTimelineInsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}