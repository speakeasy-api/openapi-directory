package openapisdk.models.operations;



public class GetTrackRequest {
    public GetTrackPathParams pathParams;
    public GetTrackRequest withPathParams(GetTrackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrackQueryParams queryParams;
    public GetTrackRequest withQueryParams(GetTrackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackSecurity security;
    public GetTrackRequest withSecurity(GetTrackSecurity security) {
        this.security = security;
        return this;
    }
}