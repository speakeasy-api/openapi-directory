package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsTargetProjectsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VmmigrationProjectsLocationsTargetProjectsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}