package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsTargetProjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VmmigrationProjectsLocationsTargetProjectsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}