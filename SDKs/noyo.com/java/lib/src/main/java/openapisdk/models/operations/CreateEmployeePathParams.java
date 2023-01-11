package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public CreateEmployeePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}