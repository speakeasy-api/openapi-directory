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
    public openapisdk.models.shared.RoutesV2SipDomain routesV2SipDomain;
    public FetchSipDomainResponse withRoutesV2SipDomain(openapisdk.models.shared.RoutesV2SipDomain routesV2SipDomain) {
        this.routesV2SipDomain = routesV2SipDomain;
        return this;
    }
}