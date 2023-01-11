package openapisdk.models.operations;



public class GetUserVodsAlt1Response {
    public String contentType;
    public GetUserVodsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserVodsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetUserVodsAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage[] onDemandPages;
    public GetUserVodsAlt1Response withOnDemandPages(openapisdk.models.shared.OnDemandPage[] onDemandPages) {
        this.onDemandPages = onDemandPages;
        return this;
    }
}