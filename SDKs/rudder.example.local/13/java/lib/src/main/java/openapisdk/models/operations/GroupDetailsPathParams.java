package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupDetailsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}