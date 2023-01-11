package openapisdk.models.operations;



public class GetVodResponse {
    public String contentType;
    public GetVodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage onDemandPage;
    public GetVodResponse withOnDemandPage(openapisdk.models.shared.OnDemandPage onDemandPage) {
        this.onDemandPage = onDemandPage;
        return this;
    }
}