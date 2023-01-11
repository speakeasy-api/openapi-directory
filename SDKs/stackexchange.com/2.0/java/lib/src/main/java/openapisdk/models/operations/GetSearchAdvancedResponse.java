package openapisdk.models.operations;



public class GetSearchAdvancedResponse {
    public byte[] body;
    public GetSearchAdvancedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSearchAdvancedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSearchAdvancedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}