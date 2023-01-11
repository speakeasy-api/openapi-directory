package openapisdk.models.operations;



public class GetVodRegionsResponse {
    public String contentType;
    public GetVodRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodRegionsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion[] onDemandRegions;
    public GetVodRegionsResponse withOnDemandRegions(openapisdk.models.shared.OnDemandRegion[] onDemandRegions) {
        this.onDemandRegions = onDemandRegions;
        return this;
    }
}