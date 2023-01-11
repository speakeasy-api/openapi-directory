package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FollowUserAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follow_user_id")
    public Double followUserId;
    public FollowUserAlt1PathParams withFollowUserId(Double followUserId) {
        this.followUserId = followUserId;
        return this;
    }
}