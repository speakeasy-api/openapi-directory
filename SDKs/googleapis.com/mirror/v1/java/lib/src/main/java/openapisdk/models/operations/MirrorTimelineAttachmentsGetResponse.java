package openapisdk.models.operations;



public class MirrorTimelineAttachmentsGetResponse {
    public byte[] body;
    public MirrorTimelineAttachmentsGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineAttachmentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineAttachmentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}