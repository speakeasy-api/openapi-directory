package openapisdk.models.operations;



public class GetMeMentionedResponse {
    public byte[] body;
    public GetMeMentionedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeMentionedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeMentionedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}