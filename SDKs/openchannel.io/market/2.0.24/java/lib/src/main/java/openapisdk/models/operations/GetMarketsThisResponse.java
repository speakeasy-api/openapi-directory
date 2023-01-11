package openapisdk.models.operations;



public class GetMarketsThisResponse {
    public byte[] body;
    public GetMarketsThisResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMarketsThisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMarketsThisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}