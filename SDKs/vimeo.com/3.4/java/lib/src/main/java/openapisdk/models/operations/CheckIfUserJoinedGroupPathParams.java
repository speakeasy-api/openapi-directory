package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserJoinedGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public CheckIfUserJoinedGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CheckIfUserJoinedGroupPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}