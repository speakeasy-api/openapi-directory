package openapisdk.models.operations;



public class GamesSnapshotsGetResponse {
    public String contentType;
    public GamesSnapshotsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Snapshot snapshot;
    public GamesSnapshotsGetResponse withSnapshot(openapisdk.models.shared.Snapshot snapshot) {
        this.snapshot = snapshot;
        return this;
    }
    public Long statusCode;
    public GamesSnapshotsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}