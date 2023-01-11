package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdWebProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdWebProfilesPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}