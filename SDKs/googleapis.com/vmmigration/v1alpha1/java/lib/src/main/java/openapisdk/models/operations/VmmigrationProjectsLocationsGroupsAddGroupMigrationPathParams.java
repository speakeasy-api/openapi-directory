package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams withGroup(String group) {
        this.group = group;
        return this;
    }
}