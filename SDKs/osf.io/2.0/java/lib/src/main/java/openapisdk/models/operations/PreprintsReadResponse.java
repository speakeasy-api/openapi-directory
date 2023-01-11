package openapisdk.models.operations;



public class PreprintsReadResponse {
    public byte[] body;
    public PreprintsReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PreprintsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PreprintsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}