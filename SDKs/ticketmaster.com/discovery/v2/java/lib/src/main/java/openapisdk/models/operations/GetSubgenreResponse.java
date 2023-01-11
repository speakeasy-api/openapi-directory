package openapisdk.models.operations;



public class GetSubgenreResponse {
    public byte[] body;
    public GetSubgenreResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSubgenreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubgenreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}