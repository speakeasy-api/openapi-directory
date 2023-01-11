package openapisdk.models.operations;



public class GetGenreVodResponse {
    public String contentType;
    public GetGenreVodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenreVodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetGenreVodResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage onDemandPage;
    public GetGenreVodResponse withOnDemandPage(openapisdk.models.shared.OnDemandPage onDemandPage) {
        this.onDemandPage = onDemandPage;
        return this;
    }
}