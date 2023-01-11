package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsTargetProjectsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VmmigrationProjectsLocationsTargetProjectsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}