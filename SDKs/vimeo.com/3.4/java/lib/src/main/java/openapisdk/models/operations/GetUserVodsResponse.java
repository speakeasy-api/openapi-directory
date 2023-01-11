package openapisdk.models.operations;



public class GetUserVodsResponse {
    public String contentType;
    public GetUserVodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserVodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetUserVodsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage[] onDemandPages;
    public GetUserVodsResponse withOnDemandPages(openapisdk.models.shared.OnDemandPage[] onDemandPages) {
        this.onDemandPages = onDemandPages;
        return this;
    }
}