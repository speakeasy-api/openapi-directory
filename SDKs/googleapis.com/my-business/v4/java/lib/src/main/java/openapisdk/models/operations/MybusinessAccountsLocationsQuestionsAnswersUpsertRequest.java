package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsAnswersUpsertRequest {
    public MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams pathParams;
    public MybusinessAccountsLocationsQuestionsAnswersUpsertRequest withPathParams(MybusinessAccountsLocationsQuestionsAnswersUpsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsQuestionsAnswersUpsertQueryParams queryParams;
    public MybusinessAccountsLocationsQuestionsAnswersUpsertRequest withQueryParams(MybusinessAccountsLocationsQuestionsAnswersUpsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpsertAnswerRequest request;
    public MybusinessAccountsLocationsQuestionsAnswersUpsertRequest withRequest(openapisdk.models.shared.UpsertAnswerRequest request) {
        this.request = request;
        return this;
    }
}