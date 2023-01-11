package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersPartialUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}