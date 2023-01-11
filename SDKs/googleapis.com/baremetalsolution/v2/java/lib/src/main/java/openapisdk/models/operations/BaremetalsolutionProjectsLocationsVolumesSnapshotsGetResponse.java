package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VolumeSnapshot volumeSnapshot;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse withVolumeSnapshot(openapisdk.models.shared.VolumeSnapshot volumeSnapshot) {
        this.volumeSnapshot = volumeSnapshot;
        return this;
    }
}