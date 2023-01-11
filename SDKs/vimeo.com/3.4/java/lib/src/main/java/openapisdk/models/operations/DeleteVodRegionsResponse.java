package openapisdk.models.operations;



public class DeleteVodRegionsResponse {
    public String contentType;
    public DeleteVodRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteVodRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public DeleteVodRegionsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion[] onDemandRegions;
    public DeleteVodRegionsResponse withOnDemandRegions(openapisdk.models.shared.OnDemandRegion[] onDemandRegions) {
        this.onDemandRegions = onDemandRegions;
        return this;
    }
}