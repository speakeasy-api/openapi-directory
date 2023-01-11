package openapisdk.models.operations;



public class MybusinessAccountsLocationsQuestionsAnswersListResponse {
    public String contentType;
    public MybusinessAccountsLocationsQuestionsAnswersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAnswersResponse listAnswersResponse;
    public MybusinessAccountsLocationsQuestionsAnswersListResponse withListAnswersResponse(openapisdk.models.shared.ListAnswersResponse listAnswersResponse) {
        this.listAnswersResponse = listAnswersResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsQuestionsAnswersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}