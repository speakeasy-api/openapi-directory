package openapisdk.models.operations;



public class MybusinessAccountsLocationsQuestionsCreateResponse {
    public String contentType;
    public MybusinessAccountsLocationsQuestionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Question question;
    public MybusinessAccountsLocationsQuestionsCreateResponse withQuestion(openapisdk.models.shared.Question question) {
        this.question = question;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsQuestionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}