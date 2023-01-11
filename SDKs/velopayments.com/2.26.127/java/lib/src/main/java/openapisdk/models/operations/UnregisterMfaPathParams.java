package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterMfaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UnregisterMfaPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}