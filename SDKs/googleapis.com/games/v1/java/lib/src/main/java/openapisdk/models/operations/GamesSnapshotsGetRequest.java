package openapisdk.models.operations;



public class GamesSnapshotsGetRequest {
    public GamesSnapshotsGetPathParams pathParams;
    public GamesSnapshotsGetRequest withPathParams(GamesSnapshotsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesSnapshotsGetQueryParams queryParams;
    public GamesSnapshotsGetRequest withQueryParams(GamesSnapshotsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesSnapshotsGetSecurity security;
    public GamesSnapshotsGetRequest withSecurity(GamesSnapshotsGetSecurity security) {
        this.security = security;
        return this;
    }
}