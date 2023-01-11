package openapisdk.models.operations;



public class GetEditorialImageLivefeedRequest {
    public GetEditorialImageLivefeedPathParams pathParams;
    public GetEditorialImageLivefeedRequest withPathParams(GetEditorialImageLivefeedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialImageLivefeedQueryParams queryParams;
    public GetEditorialImageLivefeedRequest withQueryParams(GetEditorialImageLivefeedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialImageLivefeedSecurity security;
    public GetEditorialImageLivefeedRequest withSecurity(GetEditorialImageLivefeedSecurity security) {
        this.security = security;
        return this;
    }
}