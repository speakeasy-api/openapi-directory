package openapisdk.models.operations;



public class FetchSipAuthCallsCredentialListMappingResponse {
    public String contentType;
    public FetchSipAuthCallsCredentialListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipAuthCallsCredentialListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
    public FetchSipAuthCallsCredentialListMappingResponse withApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping) {
        this.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
        return this;
    }
}