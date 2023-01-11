package openapisdk.models.operations;



public class DomainsrdapEntityGetResponse {
    public String contentType;
    public DomainsrdapEntityGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RdapResponse rdapResponse;
    public DomainsrdapEntityGetResponse withRdapResponse(openapisdk.models.shared.RdapResponse rdapResponse) {
        this.rdapResponse = rdapResponse;
        return this;
    }
    public Long statusCode;
    public DomainsrdapEntityGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}