package openapisdk.models.operations;



public class GetVodGenresByOndemandIdResponse {
    public String contentType;
    public GetVodGenresByOndemandIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodGenresByOndemandIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodGenresByOndemandIdResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandGenre[] onDemandGenres;
    public GetVodGenresByOndemandIdResponse withOnDemandGenres(openapisdk.models.shared.OnDemandGenre[] onDemandGenres) {
        this.onDemandGenres = onDemandGenres;
        return this;
    }
}