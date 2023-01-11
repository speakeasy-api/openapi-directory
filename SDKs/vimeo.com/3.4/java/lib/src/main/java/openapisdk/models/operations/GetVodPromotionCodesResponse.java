package openapisdk.models.operations;



public class GetVodPromotionCodesResponse {
    public String contentType;
    public GetVodPromotionCodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodPromotionCodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodPromotionCodesResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPromotionCode onDemandPromotionCode;
    public GetVodPromotionCodesResponse withOnDemandPromotionCode(openapisdk.models.shared.OnDemandPromotionCode onDemandPromotionCode) {
        this.onDemandPromotionCode = onDemandPromotionCode;
        return this;
    }
}