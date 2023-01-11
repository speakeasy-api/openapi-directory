package openapisdk.models.operations;



public class DomainsrdapGetNameserversResponse {
    public String contentType;
    public DomainsrdapGetNameserversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapGetNameserversResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapGetNameserversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}