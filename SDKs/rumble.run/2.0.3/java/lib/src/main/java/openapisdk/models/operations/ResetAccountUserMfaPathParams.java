package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetAccountUserMfaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public ResetAccountUserMfaPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}