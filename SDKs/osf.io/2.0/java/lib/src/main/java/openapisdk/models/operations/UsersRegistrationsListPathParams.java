package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersRegistrationsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}