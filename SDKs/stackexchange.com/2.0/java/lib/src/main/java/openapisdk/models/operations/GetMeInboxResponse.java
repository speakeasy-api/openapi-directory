package openapisdk.models.operations;



public class GetMeInboxResponse {
    public byte[] body;
    public GetMeInboxResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeInboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeInboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}