package openapisdk.models.operations;



public class GetVodGenreResponse {
    public String contentType;
    public GetVodGenreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodGenreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodGenreResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandGenre onDemandGenre;
    public GetVodGenreResponse withOnDemandGenre(openapisdk.models.shared.OnDemandGenre onDemandGenre) {
        this.onDemandGenre = onDemandGenre;
        return this;
    }
}