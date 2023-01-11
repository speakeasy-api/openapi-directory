package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VolumeSnapshot volumeSnapshot;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse withVolumeSnapshot(openapisdk.models.shared.VolumeSnapshot volumeSnapshot) {
        this.volumeSnapshot = volumeSnapshot;
        return this;
    }
}