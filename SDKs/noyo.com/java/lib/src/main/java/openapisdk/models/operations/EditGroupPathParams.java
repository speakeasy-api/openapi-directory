package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public EditGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditGroupPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}