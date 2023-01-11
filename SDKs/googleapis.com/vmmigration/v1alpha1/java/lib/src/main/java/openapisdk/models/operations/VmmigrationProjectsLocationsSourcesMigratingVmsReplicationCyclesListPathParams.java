package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}