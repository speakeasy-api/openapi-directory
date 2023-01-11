package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSnapshotsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FileProjectsLocationsInstancesSnapshotsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}