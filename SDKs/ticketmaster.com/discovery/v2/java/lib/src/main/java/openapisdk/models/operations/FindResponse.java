package openapisdk.models.operations;



public class FindResponse {
    public byte[] body;
    public FindResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}