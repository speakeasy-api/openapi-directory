package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgotPasswordOneTimeCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ForgotPasswordOneTimeCodePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}