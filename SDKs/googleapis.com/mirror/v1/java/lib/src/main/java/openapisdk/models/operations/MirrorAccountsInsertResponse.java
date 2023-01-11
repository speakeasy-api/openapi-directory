package openapisdk.models.operations;



public class MirrorAccountsInsertResponse {
    public byte[] body;
    public MirrorAccountsInsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MirrorAccountsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MirrorAccountsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}