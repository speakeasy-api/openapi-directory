package openapisdk.models.operations;



public class DomainsrdapIpGetResponse {
    public String contentType;
    public DomainsrdapIpGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapIpGetResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapIpGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}