package openapisdk.models.operations;



public class GetTrackCollectionListRequest {
    public GetTrackCollectionListQueryParams queryParams;
    public GetTrackCollectionListRequest withQueryParams(GetTrackCollectionListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackCollectionListSecurity security;
    public GetTrackCollectionListRequest withSecurity(GetTrackCollectionListSecurity security) {
        this.security = security;
        return this;
    }
}