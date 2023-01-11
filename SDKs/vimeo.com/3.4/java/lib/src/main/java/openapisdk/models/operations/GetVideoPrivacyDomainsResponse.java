package openapisdk.models.operations;



public class GetVideoPrivacyDomainsResponse {
    public String contentType;
    public GetVideoPrivacyDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoPrivacyDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Domain[] domains;
    public GetVideoPrivacyDomainsResponse withDomains(openapisdk.models.shared.Domain[] domains) {
        this.domains = domains;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVideoPrivacyDomainsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}