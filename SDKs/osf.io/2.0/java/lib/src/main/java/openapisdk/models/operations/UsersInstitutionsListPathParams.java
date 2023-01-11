package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersInstitutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersInstitutionsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}