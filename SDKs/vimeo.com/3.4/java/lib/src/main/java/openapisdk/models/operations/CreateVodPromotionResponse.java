package openapisdk.models.operations;



public class CreateVodPromotionResponse {
    public String contentType;
    public CreateVodPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVodPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateVodPromotionResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPromotion onDemandPromotion;
    public CreateVodPromotionResponse withOnDemandPromotion(openapisdk.models.shared.OnDemandPromotion onDemandPromotion) {
        this.onDemandPromotion = onDemandPromotion;
        return this;
    }
}