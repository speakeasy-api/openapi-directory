package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetUserFollowingPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}