package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}