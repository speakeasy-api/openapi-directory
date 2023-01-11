package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserIsFollowingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follow_user_id")
    public Double followUserId;
    public CheckIfUserIsFollowingPathParams withFollowUserId(Double followUserId) {
        this.followUserId = followUserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CheckIfUserIsFollowingPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}