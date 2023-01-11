package openapisdk.models.operations;



public class GetTrackCollectionRequest {
    public GetTrackCollectionPathParams pathParams;
    public GetTrackCollectionRequest withPathParams(GetTrackCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrackCollectionQueryParams queryParams;
    public GetTrackCollectionRequest withQueryParams(GetTrackCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackCollectionSecurity security;
    public GetTrackCollectionRequest withSecurity(GetTrackCollectionSecurity security) {
        this.security = security;
        return this;
    }
}