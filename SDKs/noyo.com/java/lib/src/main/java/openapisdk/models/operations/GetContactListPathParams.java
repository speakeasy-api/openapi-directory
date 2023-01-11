package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetContactListPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}