package openapisdk.models.operations;



public class GetBadgesResponse {
    public byte[] body;
    public GetBadgesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetBadgesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBadgesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}