package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsmigrationArchiveInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GroupsmigrationArchiveInsertPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}