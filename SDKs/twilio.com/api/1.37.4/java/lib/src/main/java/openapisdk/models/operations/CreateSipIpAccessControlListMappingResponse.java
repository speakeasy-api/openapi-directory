package openapisdk.models.operations;



public class CreateSipIpAccessControlListMappingResponse {
    public String contentType;
    public CreateSipIpAccessControlListMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSipIpAccessControlListMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
    public CreateSipIpAccessControlListMappingResponse withApiV2010AccountSipSipDomainSipIpAccessControlListMapping(openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping apiV2010AccountSipSipDomainSipIpAccessControlListMapping) {
        this.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = apiV2010AccountSipSipDomainSipIpAccessControlListMapping;
        return this;
    }
}