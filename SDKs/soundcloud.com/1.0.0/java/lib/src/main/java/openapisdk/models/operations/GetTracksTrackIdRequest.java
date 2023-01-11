package openapisdk.models.operations;



public class GetTracksTrackIdRequest {
    public GetTracksTrackIdPathParams pathParams;
    public GetTracksTrackIdRequest withPathParams(GetTracksTrackIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTracksTrackIdQueryParams queryParams;
    public GetTracksTrackIdRequest withQueryParams(GetTracksTrackIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTracksTrackIdSecurity security;
    public GetTracksTrackIdRequest withSecurity(GetTracksTrackIdSecurity security) {
        this.security = security;
        return this;
    }
}