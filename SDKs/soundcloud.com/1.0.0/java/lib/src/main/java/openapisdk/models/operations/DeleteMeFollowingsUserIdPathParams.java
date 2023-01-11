package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMeFollowingsUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public DeleteMeFollowingsUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}