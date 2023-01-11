package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}