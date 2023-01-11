package openapisdk.models.operations;



public class GetVodRegionResponse {
    public String contentType;
    public GetVodRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodRegionResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion onDemandRegion;
    public GetVodRegionResponse withOnDemandRegion(openapisdk.models.shared.OnDemandRegion onDemandRegion) {
        this.onDemandRegion = onDemandRegion;
        return this;
    }
}