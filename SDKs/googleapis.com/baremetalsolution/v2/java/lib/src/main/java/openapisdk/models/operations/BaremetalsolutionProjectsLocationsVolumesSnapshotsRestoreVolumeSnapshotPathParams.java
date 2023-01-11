package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeSnapshot")
    public String volumeSnapshot;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams withVolumeSnapshot(String volumeSnapshot) {
        this.volumeSnapshot = volumeSnapshot;
        return this;
    }
}