package openapisdk.models.operations;



public class MybusinessAccountsLocationsQuestionsPatchResponse {
    public String contentType;
    public MybusinessAccountsLocationsQuestionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Question question;
    public MybusinessAccountsLocationsQuestionsPatchResponse withQuestion(openapisdk.models.shared.Question question) {
        this.question = question;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsQuestionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}