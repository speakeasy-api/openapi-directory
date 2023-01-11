package openapisdk.models.operations;



public class MirrorContactsInsertResponse {
    public byte[] body;
    public MirrorContactsInsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorContactsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorContactsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}