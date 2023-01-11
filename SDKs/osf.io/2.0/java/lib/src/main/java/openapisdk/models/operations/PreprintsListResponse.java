package openapisdk.models.operations;



public class PreprintsListResponse {
    public byte[] body;
    public PreprintsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PreprintsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PreprintsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}