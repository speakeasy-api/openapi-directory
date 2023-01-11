package openapisdk.models.operations;



public class FetchSipIpAccessControlListMappingResponse {
    public String contentType;
    public FetchSipIpAccessControlListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSipIpAccessControlListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
    public FetchSipIpAccessControlListMappingResponse withApiV2010AccountSipSipDomainSipIpAccessControlListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping) {
        this.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
        return this;
    }
}