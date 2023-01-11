package openapisdk.models.operations;



public class MybusinessAccountsLocationsQuestionsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsQuestionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQuestionsResponse listQuestionsResponse;
    public MybusinessAccountsLocationsQuestionsListResponse withListQuestionsResponse(openapisdk.models.shared.ListQuestionsResponse listQuestionsResponse) {
        this.listQuestionsResponse = listQuestionsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsQuestionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}