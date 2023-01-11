package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PostUsersUserIdPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}