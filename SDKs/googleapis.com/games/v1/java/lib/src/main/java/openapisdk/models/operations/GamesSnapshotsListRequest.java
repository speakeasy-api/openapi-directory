package openapisdk.models.operations;



public class GamesSnapshotsListRequest {
    public GamesSnapshotsListPathParams pathParams;
    public GamesSnapshotsListRequest withPathParams(GamesSnapshotsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesSnapshotsListQueryParams queryParams;
    public GamesSnapshotsListRequest withQueryParams(GamesSnapshotsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesSnapshotsListSecurity security;
    public GamesSnapshotsListRequest withSecurity(GamesSnapshotsListSecurity security) {
        this.security = security;
        return this;
    }
}