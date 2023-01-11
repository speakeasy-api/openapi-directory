package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsCreateRequest {
    public MybusinessAccountsLocationsQuestionsCreatePathParams pathParams;
    public MybusinessAccountsLocationsQuestionsCreateRequest withPathParams(MybusinessAccountsLocationsQuestionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsQuestionsCreateQueryParams queryParams;
    public MybusinessAccountsLocationsQuestionsCreateRequest withQueryParams(MybusinessAccountsLocationsQuestionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Question request;
    public MybusinessAccountsLocationsQuestionsCreateRequest withRequest(openapisdk.models.shared.Question request) {
        this.request = request;
        return this;
    }
}