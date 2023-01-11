package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdFollowingsFollowingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=following_id")
    public Long followingId;
    public GetUsersUserIdFollowingsFollowingIdPathParams withFollowingId(Long followingId) {
        this.followingId = followingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdFollowingsFollowingIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}