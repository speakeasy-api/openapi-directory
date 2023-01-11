package openapisdk.models.operations;



public class GetV1PocsOutputFormatResponse {
    public byte[] body;
    public GetV1PocsOutputFormatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV1PocsOutputFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV1PocsOutputFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}