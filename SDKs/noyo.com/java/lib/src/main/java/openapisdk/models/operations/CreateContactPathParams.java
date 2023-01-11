package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public CreateContactPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}