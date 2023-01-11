package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest {
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreatePathParams pathParams;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest withPathParams(BaremetalsolutionProjectsLocationsVolumesSnapshotsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest withQueryParams(BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VolumeSnapshotInput request;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest withRequest(openapisdk.models.shared.VolumeSnapshotInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity security;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest withSecurity(BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity security) {
        this.security = security;
        return this;
    }
}