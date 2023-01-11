package openapisdk.models.operations;



public class GetEditorialLivefeedItemsRequest {
    public GetEditorialLivefeedItemsPathParams pathParams;
    public GetEditorialLivefeedItemsRequest withPathParams(GetEditorialLivefeedItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEditorialLivefeedItemsQueryParams queryParams;
    public GetEditorialLivefeedItemsRequest withQueryParams(GetEditorialLivefeedItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEditorialLivefeedItemsSecurity security;
    public GetEditorialLivefeedItemsRequest withSecurity(GetEditorialLivefeedItemsSecurity security) {
        this.security = security;
        return this;
    }
}