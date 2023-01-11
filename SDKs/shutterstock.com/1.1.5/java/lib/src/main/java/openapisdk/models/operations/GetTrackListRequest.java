package openapisdk.models.operations;



public class GetTrackListRequest {
    public GetTrackListQueryParams queryParams;
    public GetTrackListRequest withQueryParams(GetTrackListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackListSecurity security;
    public GetTrackListRequest withSecurity(GetTrackListSecurity security) {
        this.security = security;
        return this;
    }
}