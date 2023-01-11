package openapisdk.models.operations;



public class DomainsrdapNameserverGetResponse {
    public String contentType;
    public DomainsrdapNameserverGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapNameserverGetResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapNameserverGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}