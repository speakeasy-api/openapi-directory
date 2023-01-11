package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}