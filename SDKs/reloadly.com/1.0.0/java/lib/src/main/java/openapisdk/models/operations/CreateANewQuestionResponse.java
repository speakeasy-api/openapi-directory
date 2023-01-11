package openapisdk.models.operations;



public class CreateANewQuestionResponse {
    public String contentType;
    public CreateANewQuestionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateANewQuestionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateANewQuestionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}