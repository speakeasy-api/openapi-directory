package openapisdk.models.operations;



public class GetOwnershipResponse {
    public byte[] body;
    public GetOwnershipResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOwnershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOwnershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}