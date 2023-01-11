package openapisdk.models.operations;



public class GetVodPromotionsRequest {
    public GetVodPromotionsPathParams pathParams;
    public GetVodPromotionsRequest withPathParams(GetVodPromotionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVodPromotionsQueryParams queryParams;
    public GetVodPromotionsRequest withQueryParams(GetVodPromotionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVodPromotionsSecurity security;
    public GetVodPromotionsRequest withSecurity(GetVodPromotionsSecurity security) {
        this.security = security;
        return this;
    }
}