package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsSettingsGroupsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupUniqueId")
    public String groupUniqueId;
    public GroupsSettingsGroupsPatchPathParams withGroupUniqueId(String groupUniqueId) {
        this.groupUniqueId = groupUniqueId;
        return this;
    }
}