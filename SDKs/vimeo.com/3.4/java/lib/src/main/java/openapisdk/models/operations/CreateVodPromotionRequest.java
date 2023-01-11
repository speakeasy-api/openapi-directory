package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodPromotionRequest {
    public CreateVodPromotionPathParams pathParams;
    public CreateVodPromotionRequest withPathParams(CreateVodPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.ondemand.promotion+json")
    public CreateVodPromotionRequestBody request;
    public CreateVodPromotionRequest withRequest(CreateVodPromotionRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateVodPromotionSecurity security;
    public CreateVodPromotionRequest withSecurity(CreateVodPromotionSecurity security) {
        this.security = security;
        return this;
    }
}