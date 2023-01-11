package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinkValidateCreateSinkValidateRequest {
    @SpeakeasyMetadata("form:name=TestId")
    public String testId;
    public CreateSinkValidateCreateSinkValidateRequest withTestId(String testId) {
        this.testId = testId;
        return this;
    }
}