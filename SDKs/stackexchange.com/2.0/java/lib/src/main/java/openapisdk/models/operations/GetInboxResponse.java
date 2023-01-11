package openapisdk.models.operations;



public class GetInboxResponse {
    public byte[] body;
    public GetInboxResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}