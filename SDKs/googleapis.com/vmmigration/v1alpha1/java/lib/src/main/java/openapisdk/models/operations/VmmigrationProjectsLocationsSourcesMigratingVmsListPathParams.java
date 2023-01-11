package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}