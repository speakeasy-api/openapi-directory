package openapisdk.models.operations;



public class RediscoverResponse {
    public byte[] body;
    public RediscoverResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RediscoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RediscoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}