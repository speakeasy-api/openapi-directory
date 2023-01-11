package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeRecoveryQuestionRequest {
    public ChangeRecoveryQuestionPathParams pathParams;
    public ChangeRecoveryQuestionRequest withPathParams(ChangeRecoveryQuestionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeRecoveryQuestionRequestBody request;
    public ChangeRecoveryQuestionRequest withRequest(ChangeRecoveryQuestionRequestBody request) {
        this.request = request;
        return this;
    }
}