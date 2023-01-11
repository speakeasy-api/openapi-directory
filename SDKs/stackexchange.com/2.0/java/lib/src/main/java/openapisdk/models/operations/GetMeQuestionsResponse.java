package openapisdk.models.operations;



public class GetMeQuestionsResponse {
    public byte[] body;
    public GetMeQuestionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeQuestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeQuestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}