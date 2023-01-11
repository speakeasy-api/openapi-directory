package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserIsFollowingAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follow_user_id")
    public Double followUserId;
    public CheckIfUserIsFollowingAlt1PathParams withFollowUserId(Double followUserId) {
        this.followUserId = followUserId;
        return this;
    }
}