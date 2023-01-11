package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupEmployeesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetGroupEmployeesListPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}