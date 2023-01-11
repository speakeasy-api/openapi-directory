package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetAccountUserLockoutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public ResetAccountUserLockoutPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}