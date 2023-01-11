package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdFollowingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdFollowingsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}