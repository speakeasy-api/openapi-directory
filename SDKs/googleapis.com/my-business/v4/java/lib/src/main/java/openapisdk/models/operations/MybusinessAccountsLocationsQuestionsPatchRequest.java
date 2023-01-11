package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsQuestionsPatchRequest {
    public MybusinessAccountsLocationsQuestionsPatchPathParams pathParams;
    public MybusinessAccountsLocationsQuestionsPatchRequest withPathParams(MybusinessAccountsLocationsQuestionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsQuestionsPatchQueryParams queryParams;
    public MybusinessAccountsLocationsQuestionsPatchRequest withQueryParams(MybusinessAccountsLocationsQuestionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Question request;
    public MybusinessAccountsLocationsQuestionsPatchRequest withRequest(openapisdk.models.shared.Question request) {
        this.request = request;
        return this;
    }
}