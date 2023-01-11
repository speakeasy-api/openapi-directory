package openapisdk.models.operations;



public class FileProjectsLocationsInstancesSnapshotsListResponse {
    public String contentType;
    public FileProjectsLocationsInstancesSnapshotsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSnapshotsResponse listSnapshotsResponse;
    public FileProjectsLocationsInstancesSnapshotsListResponse withListSnapshotsResponse(openapisdk.models.shared.ListSnapshotsResponse listSnapshotsResponse) {
        this.listSnapshotsResponse = listSnapshotsResponse;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsInstancesSnapshotsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}