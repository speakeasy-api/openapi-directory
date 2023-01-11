package openapisdk.models.operations;



public class FetchSipCredentialListMappingResponse {
    public String contentType;
    public FetchSipCredentialListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipCredentialListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping apiV2010AccountSipSipDomainSipCredentialListMapping;
    public FetchSipCredentialListMappingResponse withApiV2010AccountSipSipDomainSipCredentialListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping apiV2010AccountSipSipDomainSipCredentialListMapping) {
        this.apiV2010AccountSipSipDomainSipCredentialListMapping = apiV2010AccountSipSipDomainSipCredentialListMapping;
        return this;
    }
}