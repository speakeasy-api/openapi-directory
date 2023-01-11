package openapisdk.models.operations;



public class GetFilesByIdOrUrlResponse {
    public byte[] body;
    public GetFilesByIdOrUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetFilesByIdOrUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFilesByIdOrUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}