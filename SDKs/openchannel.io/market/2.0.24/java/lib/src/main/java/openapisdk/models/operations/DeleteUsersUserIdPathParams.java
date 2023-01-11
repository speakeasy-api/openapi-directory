package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteUsersUserIdPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}