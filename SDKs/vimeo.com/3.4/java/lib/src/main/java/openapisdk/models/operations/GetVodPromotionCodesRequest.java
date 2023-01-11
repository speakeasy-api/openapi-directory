package openapisdk.models.operations;



public class GetVodPromotionCodesRequest {
    public GetVodPromotionCodesPathParams pathParams;
    public GetVodPromotionCodesRequest withPathParams(GetVodPromotionCodesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVodPromotionCodesQueryParams queryParams;
    public GetVodPromotionCodesRequest withQueryParams(GetVodPromotionCodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVodPromotionCodesSecurity security;
    public GetVodPromotionCodesRequest withSecurity(GetVodPromotionCodesSecurity security) {
        this.security = security;
        return this;
    }
}