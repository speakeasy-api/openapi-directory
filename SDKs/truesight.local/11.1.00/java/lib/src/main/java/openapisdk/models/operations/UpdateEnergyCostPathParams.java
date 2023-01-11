package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnergyCostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public UpdateEnergyCostPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}