package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}