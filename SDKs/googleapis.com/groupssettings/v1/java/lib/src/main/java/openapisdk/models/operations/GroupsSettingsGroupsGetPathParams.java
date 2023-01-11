package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsSettingsGroupsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupUniqueId")
    public String groupUniqueId;
    public GroupsSettingsGroupsGetPathParams withGroupUniqueId(String groupUniqueId) {
        this.groupUniqueId = groupUniqueId;
        return this;
    }
}