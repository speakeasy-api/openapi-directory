package openapisdk.models.operations;



public class GetVodSeasonsResponse {
    public String contentType;
    public GetVodSeasonsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodSeasonsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodSeasonsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandSeason[] onDemandSeasons;
    public GetVodSeasonsResponse withOnDemandSeasons(openapisdk.models.shared.OnDemandSeason[] onDemandSeasons) {
        this.onDemandSeasons = onDemandSeasons;
        return this;
    }
}