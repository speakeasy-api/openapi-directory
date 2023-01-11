package openapisdk.models.operations;



public class GetSuggestedEditsResponse {
    public byte[] body;
    public GetSuggestedEditsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSuggestedEditsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSuggestedEditsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}