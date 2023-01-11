package openapisdk.models.operations;



public class GetEditorialImageLivefeedItemsRequest {
    public GetEditorialImageLivefeedItemsPathParams pathParams;
    public GetEditorialImageLivefeedItemsRequest withPathParams(GetEditorialImageLivefeedItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialImageLivefeedItemsQueryParams queryParams;
    public GetEditorialImageLivefeedItemsRequest withQueryParams(GetEditorialImageLivefeedItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialImageLivefeedItemsSecurity security;
    public GetEditorialImageLivefeedItemsRequest withSecurity(GetEditorialImageLivefeedItemsSecurity security) {
        this.security = security;
        return this;
    }
}