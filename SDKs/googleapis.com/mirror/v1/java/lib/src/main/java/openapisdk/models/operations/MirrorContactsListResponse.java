package openapisdk.models.operations;



public class MirrorContactsListResponse {
    public byte[] body;
    public MirrorContactsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorContactsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorContactsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}