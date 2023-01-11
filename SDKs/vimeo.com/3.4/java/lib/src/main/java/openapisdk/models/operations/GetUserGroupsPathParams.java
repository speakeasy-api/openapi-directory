package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetUserGroupsPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}