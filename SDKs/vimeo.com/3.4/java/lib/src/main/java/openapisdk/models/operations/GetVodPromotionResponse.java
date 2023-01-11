package openapisdk.models.operations;



public class GetVodPromotionResponse {
    public String contentType;
    public GetVodPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodPromotionResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPromotion onDemandPromotion;
    public GetVodPromotionResponse withOnDemandPromotion(openapisdk.models.shared.OnDemandPromotion onDemandPromotion) {
        this.onDemandPromotion = onDemandPromotion;
        return this;
    }
}