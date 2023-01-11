package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}