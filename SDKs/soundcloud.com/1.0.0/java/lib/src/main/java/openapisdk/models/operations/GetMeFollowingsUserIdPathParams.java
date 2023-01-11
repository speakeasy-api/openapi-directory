package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeFollowingsUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetMeFollowingsUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}