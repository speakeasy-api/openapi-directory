package openapisdk.models.operations;



public class FetchSipDomainResponse {
    public String contentType;
    public FetchSipDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain;
    public FetchSipDomainResponse withApiV2010AccountSipSipDomain(openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain) {
        this.apiV2010AccountSipSipDomain = apiV2010AccountSipSipDomain;
        return this;
    }
}