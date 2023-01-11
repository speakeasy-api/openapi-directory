package openapisdk.models.operations;



public class DomainsrdapAutnumGetResponse {
    public String contentType;
    public DomainsrdapAutnumGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapAutnumGetResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapAutnumGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}