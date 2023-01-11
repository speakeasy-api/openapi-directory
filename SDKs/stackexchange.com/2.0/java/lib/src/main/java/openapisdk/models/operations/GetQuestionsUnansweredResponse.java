package openapisdk.models.operations;



public class GetQuestionsUnansweredResponse {
    public byte[] body;
    public GetQuestionsUnansweredResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetQuestionsUnansweredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetQuestionsUnansweredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}