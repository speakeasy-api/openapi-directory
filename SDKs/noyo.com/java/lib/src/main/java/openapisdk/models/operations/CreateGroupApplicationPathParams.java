package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public CreateGroupApplicationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}