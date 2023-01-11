package openapisdk.models.operations;



public class CreateSipAuthCallsCredentialListMappingResponse {
    public String contentType;
    public CreateSipAuthCallsCredentialListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipAuthCallsCredentialListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
    public CreateSipAuthCallsCredentialListMappingResponse withApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping) {
        this.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
        return this;
    }
}