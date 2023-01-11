package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ChangePasswordPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}