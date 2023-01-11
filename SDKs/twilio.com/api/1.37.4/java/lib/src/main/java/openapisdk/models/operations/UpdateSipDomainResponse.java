package openapisdk.models.operations;



public class UpdateSipDomainResponse {
    public String contentType;
    public UpdateSipDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSipDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain;
    public UpdateSipDomainResponse withApiV2010AccountSipSipDomain(openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain) {
        this.apiV2010AccountSipSipDomain = apiV2010AccountSipSipDomain;
        return this;
    }
}