package openapisdk.models.operations;



public class GetTracksTrackIdFavoritersRequest {
    public GetTracksTrackIdFavoritersPathParams pathParams;
    public GetTracksTrackIdFavoritersRequest withPathParams(GetTracksTrackIdFavoritersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTracksTrackIdFavoritersQueryParams queryParams;
    public GetTracksTrackIdFavoritersRequest withQueryParams(GetTracksTrackIdFavoritersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTracksTrackIdFavoritersSecurity security;
    public GetTracksTrackIdFavoritersRequest withSecurity(GetTracksTrackIdFavoritersSecurity security) {
        this.security = security;
        return this;
    }
}