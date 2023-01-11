package openapisdk.models.operations;



public class GetMeBadgesResponse {
    public byte[] body;
    public GetMeBadgesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeBadgesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeBadgesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}