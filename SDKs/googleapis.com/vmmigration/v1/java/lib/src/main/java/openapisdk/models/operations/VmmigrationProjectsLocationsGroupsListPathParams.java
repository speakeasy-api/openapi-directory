package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsGroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VmmigrationProjectsLocationsGroupsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}