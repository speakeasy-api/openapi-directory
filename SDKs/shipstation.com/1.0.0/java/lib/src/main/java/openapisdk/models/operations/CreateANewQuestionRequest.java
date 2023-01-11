package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateANewQuestionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateANewQuestionRequestBody request;
    public CreateANewQuestionRequest withRequest(CreateANewQuestionRequestBody request) {
        this.request = request;
        return this;
    }
}