package openapisdk.models.operations;



public class CleanResponse {
    public byte[] body;
    public CleanResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CleanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CleanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}