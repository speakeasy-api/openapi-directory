package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersReadPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}