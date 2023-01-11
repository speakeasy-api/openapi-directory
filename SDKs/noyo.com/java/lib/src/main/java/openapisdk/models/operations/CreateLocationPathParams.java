package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public CreateLocationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}