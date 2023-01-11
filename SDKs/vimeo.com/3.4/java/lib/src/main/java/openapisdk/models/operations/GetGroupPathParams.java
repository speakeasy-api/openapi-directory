package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public GetGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}