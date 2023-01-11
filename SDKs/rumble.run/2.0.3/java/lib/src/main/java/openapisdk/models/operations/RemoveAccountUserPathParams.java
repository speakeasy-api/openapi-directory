package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAccountUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public RemoveAccountUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}