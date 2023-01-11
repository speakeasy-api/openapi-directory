package openapisdk.models.operations;



public class GetResponse {
    public byte[] body;
    public GetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}