package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSnapshotsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FileProjectsLocationsInstancesSnapshotsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}