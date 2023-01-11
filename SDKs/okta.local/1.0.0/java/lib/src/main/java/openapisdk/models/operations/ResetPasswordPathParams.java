package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetPasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ResetPasswordPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}