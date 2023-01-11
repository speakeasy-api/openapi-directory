package openapisdk.models.operations;



public class GetMeSuggestedEditsResponse {
    public byte[] body;
    public GetMeSuggestedEditsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeSuggestedEditsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeSuggestedEditsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}