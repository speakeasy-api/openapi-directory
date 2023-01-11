package openapisdk.models.operations;



public class AddonsListResponse {
    public byte[] body;
    public AddonsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddonsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddonsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}