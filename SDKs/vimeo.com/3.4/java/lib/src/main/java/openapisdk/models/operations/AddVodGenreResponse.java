package openapisdk.models.operations;



public class AddVodGenreResponse {
    public String contentType;
    public AddVodGenreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVodGenreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVodGenreResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandGenre onDemandGenre;
    public AddVodGenreResponse withOnDemandGenre(openapisdk.models.shared.OnDemandGenre onDemandGenre) {
        this.onDemandGenre = onDemandGenre;
        return this;
    }
}