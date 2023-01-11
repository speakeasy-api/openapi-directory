package openapisdk.models.operations;



public class GetHistoryResponse {
    public byte[] body;
    public GetHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}