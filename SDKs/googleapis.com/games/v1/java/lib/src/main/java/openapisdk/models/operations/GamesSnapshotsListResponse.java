package openapisdk.models.operations;



public class GamesSnapshotsListResponse {
    public String contentType;
    public GamesSnapshotsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnapshotListResponse snapshotListResponse;
    public GamesSnapshotsListResponse withSnapshotListResponse(openapisdk.models.shared.SnapshotListResponse snapshotListResponse) {
        this.snapshotListResponse = snapshotListResponse;
        return this;
    }
    public Long statusCode;
    public GamesSnapshotsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}