package openapisdk.models.operations;



public class GetStatsTotalResponse {
    public byte[] body;
    public GetStatsTotalResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStatsTotalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatsTotalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}