package openapisdk.models.operations;



public class GetVodGenreByOndemandIdResponse {
    public String contentType;
    public GetVodGenreByOndemandIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodGenreByOndemandIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodGenreByOndemandIdResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandGenre onDemandGenre;
    public GetVodGenreByOndemandIdResponse withOnDemandGenre(openapisdk.models.shared.OnDemandGenre onDemandGenre) {
        this.onDemandGenre = onDemandGenre;
        return this;
    }
}