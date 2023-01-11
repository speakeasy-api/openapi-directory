package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMeFollowingsUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public PutMeFollowingsUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}