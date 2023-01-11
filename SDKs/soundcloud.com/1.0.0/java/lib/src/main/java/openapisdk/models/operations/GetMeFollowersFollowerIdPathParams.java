package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeFollowersFollowerIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=follower_id")
    public Long followerId;
    public GetMeFollowersFollowerIdPathParams withFollowerId(Long followerId) {
        this.followerId = followerId;
        return this;
    }
}