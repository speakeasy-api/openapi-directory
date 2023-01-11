package openapisdk.models.operations;



public class GetSearchResponse {
    public byte[] body;
    public GetSearchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}