package openapisdk.models.operations;



public class GetVodSeasonResponse {
    public String contentType;
    public GetVodSeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodSeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodSeasonResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandSeason onDemandSeason;
    public GetVodSeasonResponse withOnDemandSeason(openapisdk.models.shared.OnDemandSeason onDemandSeason) {
        this.onDemandSeason = onDemandSeason;
        return this;
    }
}