package openapisdk.models.operations;



public class AddVodRegionResponse {
    public String contentType;
    public AddVodRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVodRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVodRegionResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion onDemandRegion;
    public AddVodRegionResponse withOnDemandRegion(openapisdk.models.shared.OnDemandRegion onDemandRegion) {
        this.onDemandRegion = onDemandRegion;
        return this;
    }
}