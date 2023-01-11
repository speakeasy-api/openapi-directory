package openapisdk.models.operations;



public class GetUpdatedVideosRequest {
    public GetUpdatedVideosQueryParams queryParams;
    public GetUpdatedVideosRequest withQueryParams(GetUpdatedVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdatedVideosSecurity security;
    public GetUpdatedVideosRequest withSecurity(GetUpdatedVideosSecurity security) {
        this.security = security;
        return this;
    }
}