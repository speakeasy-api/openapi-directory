package openapisdk.models.operations;



public class GetVodPromotionsResponse {
    public String contentType;
    public GetVodPromotionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodPromotionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodPromotionsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPromotion onDemandPromotion;
    public GetVodPromotionsResponse withOnDemandPromotion(openapisdk.models.shared.OnDemandPromotion onDemandPromotion) {
        this.onDemandPromotion = onDemandPromotion;
        return this;
    }
}