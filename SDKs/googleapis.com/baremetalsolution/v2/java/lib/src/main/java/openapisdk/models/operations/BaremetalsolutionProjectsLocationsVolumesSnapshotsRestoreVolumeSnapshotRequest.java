package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest {
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams pathParams;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest withPathParams(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest withQueryParams(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity security;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest withSecurity(BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity security) {
        this.security = security;
        return this;
    }
}