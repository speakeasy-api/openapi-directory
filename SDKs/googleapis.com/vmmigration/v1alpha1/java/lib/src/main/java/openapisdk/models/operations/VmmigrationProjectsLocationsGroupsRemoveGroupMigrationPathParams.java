package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public VmmigrationProjectsLocationsGroupsRemoveGroupMigrationPathParams withGroup(String group) {
        this.group = group;
        return this;
    }
}