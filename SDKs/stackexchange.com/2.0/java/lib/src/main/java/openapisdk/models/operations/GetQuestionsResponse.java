package openapisdk.models.operations;



public class GetQuestionsResponse {
    public byte[] body;
    public GetQuestionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetQuestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetQuestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}