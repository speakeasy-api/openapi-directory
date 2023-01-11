package openapisdk.models.operations;



public class GetMeAssociatedResponse {
    public byte[] body;
    public GetMeAssociatedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeAssociatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeAssociatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}