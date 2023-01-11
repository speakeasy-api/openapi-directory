package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlockUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UnlockUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}