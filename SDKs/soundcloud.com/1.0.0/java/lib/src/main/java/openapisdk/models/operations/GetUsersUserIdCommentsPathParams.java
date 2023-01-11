package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdCommentsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}