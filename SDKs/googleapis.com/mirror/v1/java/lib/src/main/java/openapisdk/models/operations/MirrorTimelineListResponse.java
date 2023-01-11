package openapisdk.models.operations;



public class MirrorTimelineListResponse {
    public byte[] body;
    public MirrorTimelineListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}