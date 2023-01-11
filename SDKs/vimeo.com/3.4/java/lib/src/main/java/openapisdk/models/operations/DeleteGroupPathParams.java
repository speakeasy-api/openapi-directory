package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public DeleteGroupPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}