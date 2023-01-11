package openapisdk.models.operations;



public class GetV1IdOutputFormatResponse {
    public byte[] body;
    public GetV1IdOutputFormatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV1IdOutputFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV1IdOutputFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}