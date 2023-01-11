package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVolumeSnapshotsResponse listVolumeSnapshotsResponse;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse withListVolumeSnapshotsResponse(openapisdk.models.shared.ListVolumeSnapshotsResponse listVolumeSnapshotsResponse) {
        this.listVolumeSnapshotsResponse = listVolumeSnapshotsResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}