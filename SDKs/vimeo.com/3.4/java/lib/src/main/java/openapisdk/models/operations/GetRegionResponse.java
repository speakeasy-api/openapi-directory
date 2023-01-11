package openapisdk.models.operations;



public class GetRegionResponse {
    public String contentType;
    public GetRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetRegionResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion onDemandRegion;
    public GetRegionResponse withOnDemandRegion(openapisdk.models.shared.OnDemandRegion onDemandRegion) {
        this.onDemandRegion = onDemandRegion;
        return this;
    }
}