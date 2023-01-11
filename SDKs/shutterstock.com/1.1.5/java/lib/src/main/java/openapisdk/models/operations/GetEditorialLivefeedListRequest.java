package openapisdk.models.operations;



public class GetEditorialLivefeedListRequest {
    public GetEditorialLivefeedListQueryParams queryParams;
    public GetEditorialLivefeedListRequest withQueryParams(GetEditorialLivefeedListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialLivefeedListSecurity security;
    public GetEditorialLivefeedListRequest withSecurity(GetEditorialLivefeedListSecurity security) {
        this.security = security;
        return this;
    }
}