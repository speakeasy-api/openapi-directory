package openapisdk.models.operations;



public class GetTracksTrackIdCommentsRequest {
    public GetTracksTrackIdCommentsPathParams pathParams;
    public GetTracksTrackIdCommentsRequest withPathParams(GetTracksTrackIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTracksTrackIdCommentsQueryParams queryParams;
    public GetTracksTrackIdCommentsRequest withQueryParams(GetTracksTrackIdCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTracksTrackIdCommentsSecurity security;
    public GetTracksTrackIdCommentsRequest withSecurity(GetTracksTrackIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}