package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ReloadGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}