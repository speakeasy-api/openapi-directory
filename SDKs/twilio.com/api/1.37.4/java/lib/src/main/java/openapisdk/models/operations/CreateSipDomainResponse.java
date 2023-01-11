package openapisdk.models.operations;



public class CreateSipDomainResponse {
    public String contentType;
    public CreateSipDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain;
    public CreateSipDomainResponse withApiV2010AccountSipSipDomain(openapisdk.models.shared.ApiV2010AccountSipSipDomain apiV2010AccountSipSipDomain) {
        this.apiV2010AccountSipSipDomain = apiV2010AccountSipSipDomain;
        return this;
    }
}