package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeRecoveryQuestionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ChangeRecoveryQuestionPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}