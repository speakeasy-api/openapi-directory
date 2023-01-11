package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PatchUsersUserIdPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}