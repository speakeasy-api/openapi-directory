package openapisdk.models.operations;



public class GetVodPromotionRequest {
    public GetVodPromotionPathParams pathParams;
    public GetVodPromotionRequest withPathParams(GetVodPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVodPromotionSecurity security;
    public GetVodPromotionRequest withSecurity(GetVodPromotionSecurity security) {
        this.security = security;
        return this;
    }
}