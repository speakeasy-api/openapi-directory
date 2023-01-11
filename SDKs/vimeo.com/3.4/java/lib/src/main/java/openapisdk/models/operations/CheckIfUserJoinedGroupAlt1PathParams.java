package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserJoinedGroupAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public CheckIfUserJoinedGroupAlt1PathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}