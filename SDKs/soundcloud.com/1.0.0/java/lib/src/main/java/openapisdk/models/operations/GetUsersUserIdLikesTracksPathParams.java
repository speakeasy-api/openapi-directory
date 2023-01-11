package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdLikesTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdLikesTracksPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}