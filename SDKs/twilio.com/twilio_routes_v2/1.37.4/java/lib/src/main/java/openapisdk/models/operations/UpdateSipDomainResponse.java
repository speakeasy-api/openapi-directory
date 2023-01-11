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
    public openapisdk.models.shared.RoutesV2SipDomain routesV2SipDomain;
    public UpdateSipDomainResponse withRoutesV2SipDomain(openapisdk.models.shared.RoutesV2SipDomain routesV2SipDomain) {
        this.routesV2SipDomain = routesV2SipDomain;
        return this;
    }
}