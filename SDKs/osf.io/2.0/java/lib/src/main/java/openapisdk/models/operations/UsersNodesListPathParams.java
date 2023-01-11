package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersNodesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UsersNodesListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}