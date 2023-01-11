package openapisdk.models.operations;



public class GetMeMergesResponse {
    public byte[] body;
    public GetMeMergesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeMergesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeMergesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}