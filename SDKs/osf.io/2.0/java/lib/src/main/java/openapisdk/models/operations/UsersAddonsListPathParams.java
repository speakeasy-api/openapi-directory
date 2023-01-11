package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddonsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersAddonsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}