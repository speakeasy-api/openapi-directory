package openapisdk.models.operations;



public class CreateSipCredentialListMappingResponse {
    public String contentType;
    public CreateSipCredentialListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipCredentialListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping apiV2010AccountSipSipDomainSipCredentialListMapping;
    public CreateSipCredentialListMappingResponse withApiV2010AccountSipSipDomainSipCredentialListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping apiV2010AccountSipSipDomainSipCredentialListMapping) {
        this.apiV2010AccountSipSipDomainSipCredentialListMapping = apiV2010AccountSipSipDomainSipCredentialListMapping;
        return this;
    }
}