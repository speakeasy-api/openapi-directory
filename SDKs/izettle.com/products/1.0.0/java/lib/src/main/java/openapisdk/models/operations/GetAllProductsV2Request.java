package openapisdk.models.operations;



public class GetAllProductsV2Request {
    public GetAllProductsV2PathParams pathParams;
    public GetAllProductsV2Request withPathParams(GetAllProductsV2PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllProductsV2QueryParams queryParams;
    public GetAllProductsV2Request withQueryParams(GetAllProductsV2QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllProductsV2Security security;
    public GetAllProductsV2Request withSecurity(GetAllProductsV2Security security) {
        this.security = security;
        return this;
    }
}