package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsSettingsGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupUniqueId")
    public String groupUniqueId;
    public GroupsSettingsGroupsUpdatePathParams withGroupUniqueId(String groupUniqueId) {
        this.groupUniqueId = groupUniqueId;
        return this;
    }
}