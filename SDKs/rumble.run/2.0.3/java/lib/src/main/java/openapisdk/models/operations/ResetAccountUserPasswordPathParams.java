package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetAccountUserPasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public ResetAccountUserPasswordPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}