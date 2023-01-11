package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public GetGroupMembersPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}