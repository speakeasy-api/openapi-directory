package openapisdk.models.operations;



public class MirrorTimelineAttachmentsInsertResponse {
    public byte[] body;
    public MirrorTimelineAttachmentsInsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorTimelineAttachmentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorTimelineAttachmentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}