package openapisdk.models.operations;



public class GetEditorialLivefeedRequest {
    public GetEditorialLivefeedPathParams pathParams;
    public GetEditorialLivefeedRequest withPathParams(GetEditorialLivefeedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialLivefeedQueryParams queryParams;
    public GetEditorialLivefeedRequest withQueryParams(GetEditorialLivefeedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialLivefeedSecurity security;
    public GetEditorialLivefeedRequest withSecurity(GetEditorialLivefeedSecurity security) {
        this.security = security;
        return this;
    }
}