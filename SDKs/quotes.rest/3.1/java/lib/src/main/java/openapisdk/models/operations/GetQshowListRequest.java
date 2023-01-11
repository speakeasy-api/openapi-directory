package openapisdk.models.operations;



public class GetQshowListRequest {
    public GetQshowListQueryParams queryParams;
    public GetQshowListRequest withQueryParams(GetQshowListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQshowListSecurity security;
    public GetQshowListRequest withSecurity(GetQshowListSecurity security) {
        this.security = security;
        return this;
    }
}