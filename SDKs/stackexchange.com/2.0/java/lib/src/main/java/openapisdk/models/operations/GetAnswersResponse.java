package openapisdk.models.operations;



public class GetAnswersResponse {
    public byte[] body;
    public GetAnswersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAnswersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnswersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}